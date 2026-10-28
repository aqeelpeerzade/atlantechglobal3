/**
 * Field validation shared by the browser forms and the /api/lead endpoint,
 * so both sides always apply exactly the same rules.
 */

export type FieldKind = "firstName" | "lastName" | "fullName" | "email" | "company" | "message" | "preferredTime";

export type FieldSpec = { kind: FieldKind; required: boolean };

export type FieldErrors = Record<string, string>;

export const LIMITS = {
  name: { min: 2, max: 50 },
  fullName: { min: 2, max: 100 },
  email: { max: 254 },
  company: { min: 2, max: 100 },
  message: { min: 10, max: 2000 },
} as const;

const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}\s'.’-]*$/u;
const COMPANY_PATTERN = /^(?=.*[\p{L}\p{N}])[\p{L}\p{M}\p{N}\s&.,'’()/+@-]+$/u;
const EMAIL_PATTERN = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;

/** Trims, strips control characters and collapses repeated spaces (single-line fields). */
export function cleanLine(value: unknown): string {
  return String(value ?? "")
    .replace(CONTROL_CHARS, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Trims and strips control characters but keeps line breaks (message fields). */
export function cleanText(value: unknown): string {
  return String(value ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(CONTROL_CHARS, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function checkName(value: string, label: string, limits: { min: number; max: number }, required: boolean) {
  if (!value) return required ? `${label} is required.` : "";
  if (value.length < limits.min) return `${label} must be at least ${limits.min} characters.`;
  if (value.length > limits.max) return `${label} must be ${limits.max} characters or fewer.`;
  if (!NAME_PATTERN.test(value)) return `${label} can only contain letters, spaces, apostrophes and hyphens.`;
  return "";
}

function checkEmail(value: string, required: boolean) {
  if (!value) return required ? "Email is required." : "";
  if (value.length > LIMITS.email.max) return "Email address is too long.";
  if (value.includes("..") || !EMAIL_PATTERN.test(value)) return "Enter a valid email address, e.g. name@company.com.";
  return "";
}

function checkCompany(value: string, required: boolean) {
  if (!value) return required ? "Company name is required." : "";
  if (value.length < LIMITS.company.min) return `Company name must be at least ${LIMITS.company.min} characters.`;
  if (value.length > LIMITS.company.max) return `Company name must be ${LIMITS.company.max} characters or fewer.`;
  if (!COMPANY_PATTERN.test(value)) return "Company name contains characters that are not allowed.";
  return "";
}

function checkMessage(value: string, required: boolean) {
  if (!value) return required ? "Message is required." : "";
  if (required && value.length < LIMITS.message.min) return `Message must be at least ${LIMITS.message.min} characters.`;
  if (value.length > LIMITS.message.max) return `Message must be ${LIMITS.message.max} characters or fewer.`;
  return "";
}

function checkPreferredTime(value: string, required: boolean) {
  if (!value) return required ? "Choose a preferred date and time." : "";
  const time = new Date(value).getTime();
  if (Number.isNaN(time)) return "Enter a valid date and time.";
  if (time < Date.now()) return "Preferred time must be in the future.";
  if (time > Date.now() + 1000 * 60 * 60 * 24 * 365) return "Preferred time must be within the next 12 months.";
  return "";
}

/** Returns an error message for a single field, or an empty string when it is valid. */
export function validateField(spec: FieldSpec, rawValue: unknown): string {
  const { kind, required } = spec;
  if (kind === "message") return checkMessage(cleanText(rawValue), required);

  const value = cleanLine(rawValue);
  switch (kind) {
    case "firstName":
      return checkName(value, "First name", LIMITS.name, required);
    case "lastName":
      return checkName(value, "Last name", LIMITS.name, required);
    case "fullName":
      return checkName(value, "Name", LIMITS.fullName, required);
    case "email":
      return checkEmail(value, required);
    case "company":
      return checkCompany(value, required);
    case "preferredTime":
      return checkPreferredTime(value, required);
  }
}

/** Validates every field in a schema and returns only the failing ones. */
export function validateFields(schema: Record<string, FieldSpec>, values: Record<string, unknown>): FieldErrors {
  const errors: FieldErrors = {};
  for (const [name, spec] of Object.entries(schema)) {
    const message = validateField(spec, values[name]);
    if (message) errors[name] = message;
  }
  return errors;
}
