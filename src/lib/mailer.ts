import "server-only";
import nodemailer from "nodemailer";

export type LeadMail = {
  subject: string;
  name: string;
  email: string;
  fields: Record<string, string>;
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const LABELS: Record<string, string> = {
  phone: "Phone",
  company: "Company",
  interest: "Area of interest",
  preferred_time: "Preferred time",
  source: "Submitted from",
  message: "Message",
};

/** True when every SMTP setting needed to send mail is present. */
export function isMailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

/** Emails a lead to the sales inbox through the company SMTP server. */
export async function sendLeadMail({ subject, name, email, fields }: LeadMail): Promise<void> {
  const port = Number(process.env.SMTP_PORT) || 465;
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  const rows = [["Name", name], ["Email", email], ...Object.entries(fields).map(([key, value]) => [LABELS[key] ?? key, value])];
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="font-weight:bold;vertical-align:top">${escapeHtml(label)}</td><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;

  await transport.sendMail({
    from: `"Atlantech Global Website" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO || "hello@atlantechglobal.com",
    replyTo: { name, address: email },
    subject,
    text,
    html,
  });
}
