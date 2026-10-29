import type { CountryCode } from "libphonenumber-js/mobile";

/** Kept apart from lib/phone.ts so reading it does not pull the phone metadata into the main bundle. */
export const DEFAULT_COUNTRY: CountryCode = "IN";
