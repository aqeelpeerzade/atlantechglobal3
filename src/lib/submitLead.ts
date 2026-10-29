import { asset } from "@/lib/asset";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/**
 * Web3Forms' free plan only accepts requests made from the browser, so when this key is set the
 * form posts straight to Web3Forms. The key is therefore visible in the browser's Network tab;
 * that is how Web3Forms is designed to work. Leave it empty to post to our own /api/lead
 * endpoint instead, which keeps credentials on the server.
 */
const PUBLIC_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

/** Server endpoint used when no public key is set (or the PHP proxy on static hosting). */
export const LEAD_ENDPOINT = process.env.NEXT_PUBLIC_LEAD_ENDPOINT || asset("/api/lead/");

export type LeadPayload = Record<string, string>;

const WEB3FORMS_FIELDS = ["subject", "email", "phone", "company", "interest", "preferred_time", "message", "source"] as const;

function toWeb3Forms(payload: LeadPayload): Record<string, string> {
  const body: Record<string, string> = {
    access_key: PUBLIC_ACCESS_KEY ?? "",
    from_name: "Atlantech Global Website",
    replyto: payload.email,
    name: payload.name || [payload.first_name, payload.last_name].filter(Boolean).join(" "),
  };
  for (const field of WEB3FORMS_FIELDS) {
    if (payload[field]) body[field] = payload[field];
  }
  if (payload.botcheck) body.botcheck = payload.botcheck;
  return body;
}

/** Sends a validated lead. Resolves true only when it was accepted. */
export async function submitLead(payload: LeadPayload): Promise<boolean> {
  const direct = Boolean(PUBLIC_ACCESS_KEY);
  try {
    const response = await fetch(direct ? WEB3FORMS_URL : LEAD_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(direct ? toWeb3Forms(payload) : payload),
    });
    const result = (await response.json()) as { success?: boolean };
    return response.ok && Boolean(result.success);
  } catch {
    return false;
  }
}
