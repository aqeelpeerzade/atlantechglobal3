import { NextResponse } from "next/server";
import { isMailConfigured, sendLeadMail } from "@/lib/mailer";
import { isValidE164 } from "@/lib/phone";
import { SITE_URL } from "@/lib/site";
import { cleanLine, cleanText, validateFields, type FieldSpec } from "@/lib/validation";

export const runtime = "nodejs";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const MIN_FILL_TIME_MS = 1000;
const RATE_LIMIT = { max: 5, windowMs: 60_000 };

const SCHEMA: Record<string, FieldSpec> = {
  first_name: { kind: "firstName", required: false },
  last_name: { kind: "lastName", required: false },
  name: { kind: "fullName", required: false },
  email: { kind: "email", required: true },
  company: { kind: "company", required: false },
  message: { kind: "message", required: false },
  preferred_time: { kind: "preferredTime", required: false },
};

const INTERESTS = new Set([
  "AI & Automation",
  "Digital Transformation",
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Product Engineering",
  "Managed Services",
]);

const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_LIMIT.max;
}

function isTrustedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const allowed = new Set([new URL(SITE_URL).origin, new URL(request.url).origin]);
  if (process.env.NODE_ENV !== "production") allowed.add("http://localhost:3000");
  return allowed.has(origin);
}

function fail(message: string, status: number) {
  return NextResponse.json({ success: false, message }, { status });
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!isMailConfigured() && !accessKey) return fail("The contact service is not configured.", 500);
  if (!isTrustedOrigin(request)) return fail("Forbidden.", 403);

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) return fail("Too many requests. Please try again in a minute.", 429);

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid request.", 400);
  }

  const elapsed = Number(body.elapsed_ms);
  if (body.botcheck || body.human !== "1" || !Number.isFinite(elapsed) || elapsed < MIN_FILL_TIME_MS) {
    // Pretend success so automated clients get no signal about why they were rejected.
    return NextResponse.json({ success: true });
  }

  const errors = validateFields(SCHEMA, body);
  const phone = cleanLine(body.phone);
  if (phone && !isValidE164(phone)) errors.phone = "Invalid phone number.";
  if (Object.keys(errors).length > 0) return NextResponse.json({ success: false, errors }, { status: 422 });

  const firstName = cleanLine(body.first_name);
  const lastName = cleanLine(body.last_name);
  const interest = cleanLine(body.interest);

  const name = cleanLine(body.name) || [firstName, lastName].filter(Boolean).join(" ");
  const email = cleanLine(body.email);
  const subject = cleanLine(body.subject).slice(0, 150) || "Website enquiry";
  const details: Record<string, string> = {};
  if (phone) details.phone = phone;
  if (cleanLine(body.company)) details.company = cleanLine(body.company);
  if (INTERESTS.has(interest)) details.interest = interest;
  if (cleanLine(body.preferred_time)) details.preferred_time = cleanLine(body.preferred_time);
  if (cleanText(body.message)) details.message = cleanText(body.message);
  details.source = cleanLine(body.source).slice(0, 100);

  try {
    if (isMailConfigured()) {
      await sendLeadMail({ subject, name, email, fields: details });
      return NextResponse.json({ success: true });
    }

    // Web3Forms only accepts server-side calls on its paid plan.
    const upstream = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: accessKey, from_name: "Atlantech Global Website", subject, name, email, replyto: email, ...details }),
    });
    const result = (await upstream.json().catch(() => ({}))) as { success?: boolean };
    if (!upstream.ok || !result.success) return fail("The message could not be delivered.", 502);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead delivery failed:", error instanceof Error ? error.message : error);
    return fail("The message could not be delivered.", 502);
  }
}
