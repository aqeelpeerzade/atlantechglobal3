/**
 * Country list and per-country phone rules, built on libphonenumber-js (mobile metadata).
 * Heavy, so the browser loads it with a dynamic import the first time a phone field mounts.
 */
import {
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js/mobile";
import examples from "libphonenumber-js/examples.mobile.json";

export type { CountryCode };

export type Country = { iso: CountryCode; name: string; dial: string };

export type PhoneRule = {
  /** National-number lengths that exist for this country (digits only, without the country code). */
  lengths: number[];
  min: number;
  max: number;
  example: string;
};

const PRIORITY: CountryCode[] = ["IN", "KW", "AE", "SA", "QA", "OM", "BH", "US", "GB", "CA", "AU", "SG"];
const EXCLUDED = new Set<string>(["AC", "TA"]);

let countryCache: Country[] | undefined;
const ruleCache = new Map<CountryCode, PhoneRule>();

export function getCountryList(): Country[] {
  if (countryCache) return countryCache;

  const names = new Intl.DisplayNames(["en"], { type: "region" });
  const all = getCountries()
    .filter((iso) => !EXCLUDED.has(iso))
    .map((iso) => ({ iso, name: names.of(iso) ?? iso, dial: `+${getCountryCallingCode(iso)}` }));

  const rank = (iso: CountryCode) => {
    const index = PRIORITY.indexOf(iso);
    return index === -1 ? PRIORITY.length : index;
  };
  countryCache = all.sort((a, b) => rank(a.iso) - rank(b.iso) || a.name.localeCompare(b.name));
  return countryCache;
}

/**
 * Derives the valid national-number lengths for a country by testing the country's example
 * mobile number, trimmed or padded to each length, against the real numbering-plan patterns.
 */
export function getPhoneRule(iso: CountryCode): PhoneRule {
  const cached = ruleCache.get(iso);
  if (cached) return cached;

  const example = getExampleNumber(iso, examples)?.nationalNumber ?? "";
  const lengths: number[] = [];
  for (let length = 4; length <= 15; length++) {
    const candidates = ["0", "1", "5", "7", "9"].flatMap((fill) => [
      length <= example.length ? example.slice(0, length) : example + fill.repeat(length - example.length),
      length <= example.length
        ? example.slice(0, length - 1) + fill
        : example.slice(0, -1) + fill.repeat(length - example.length + 1),
    ]);
    if (candidates.some((digits) => isValidPhoneNumber(digits, iso))) lengths.push(length);
  }
  if (lengths.length === 0 && example) lengths.push(example.length);

  const rule = { lengths, min: Math.min(...lengths), max: Math.max(...lengths), example };
  ruleCache.set(iso, rule);
  return rule;
}

/** Human-readable length hint such as "10 digits" or "10–11 digits". */
export function describeLength(rule: PhoneRule): string {
  if (rule.lengths.length === 0) return "a valid number";
  return rule.min === rule.max ? `${rule.min} digits` : `${rule.min}–${rule.max} digits`;
}

/** Maximum digits the input accepts; one extra is allowed for a leading national "0" prefix. */
export function maxInputLength(iso: CountryCode, digits: string): number {
  const { max } = getPhoneRule(iso);
  return digits.startsWith("0") ? max + 1 : max;
}

/** Returns an error message for a national number, or an empty string when it is valid. */
export function validateNational(iso: CountryCode, digits: string, required: boolean, countryName: string): string {
  if (!digits) return required ? "Phone number is required." : "";
  const rule = getPhoneRule(iso);
  if (digits.length < rule.min) return `Enter a ${describeLength(rule)} number for ${countryName}.`;
  if (digits.length > maxInputLength(iso, digits)) return `Number is too long for ${countryName} (${describeLength(rule)}).`;
  if (!isValidPhoneNumber(digits, iso)) return `Enter a valid ${countryName} mobile number, e.g. ${rule.example}.`;
  return "";
}

/** Formats a national number as E.164 (+919876543210); undefined when the number is invalid. */
export function toE164(iso: CountryCode, digits: string): string | undefined {
  const parsed = parsePhoneNumberFromString(digits, iso);
  return parsed?.isValid() ? parsed.number : undefined;
}

/** Splits a pasted international number (e.g. "+91 98765 43210") into country and national digits. */
export function parseInternational(text: string): { iso: CountryCode; national: string } | undefined {
  if (!text.trim().startsWith("+")) return undefined;
  const parsed = parsePhoneNumberFromString(text);
  if (!parsed?.country) return undefined;
  return { iso: parsed.country, national: parsed.nationalNumber };
}

/** Server-side check for a submitted E.164 number. */
export function isValidE164(value: string): boolean {
  return /^\+[1-9]\d{6,14}$/.test(value) && Boolean(parsePhoneNumberFromString(value)?.isValid());
}
