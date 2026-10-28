"use client";

import { useEffect, useId, useRef, useState, type FocusEvent, type FormEvent } from "react";
import { submitLead, type LeadPayload } from "@/lib/submitLead";
import { cleanLine, cleanText, validateField, validateFields, type FieldErrors, type FieldSpec } from "@/lib/validation";
import type { CountryCode } from "@/lib/phone";
import { DEFAULT_COUNTRY } from "@/lib/phoneDefaults";

export type Status = "idle" | "loading" | "success" | "error";

export type PhoneState = { iso: CountryCode; national: string };

type Options = {
  /** Validation rules for the text fields, keyed by input name. */
  schema: Record<string, FieldSpec>;
  /** Set when the form has a phone field; `required` controls whether it may be left empty. */
  phone?: { required: boolean };
  /** Builds the email subject at submit time (it can depend on form mode). */
  subject: () => string;
  /** Set to false for forms that skip the "I'm not a robot" checkbox (e.g. the footer newsletter). */
  humanCheck?: boolean;
  /** Identifies the page or form the lead came from. */
  source: string;
};

const HUMAN_ERROR = "Please confirm that you are not a robot.";

/**
 * Shared behaviour for every lead form: field validation (on blur and on submit), phone
 * normalisation, the human check and submission through the server endpoint.
 */
export function useLeadForm({ schema, phone, subject, source, humanCheck = true }: Options) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [phoneValue, setPhoneValue] = useState<PhoneState>({ iso: DEFAULT_COUNTRY, national: "" });
  const [human, setHuman] = useState(false);
  const openedAt = useRef(0);
  const uid = useId();

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const setError = (name: string, message: string) =>
    setErrors((current) => {
      if (!message && !(name in current)) return current;
      const next = { ...current };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });

  function handleBlur(event: FocusEvent<HTMLFormElement>) {
    const { name, value } = event.target as unknown as HTMLInputElement;
    const spec = schema[name];
    if (spec) setError(name, validateField(spec, value));
  }

  function handleInput(event: FormEvent<HTMLFormElement>) {
    const { name } = event.target as unknown as HTMLInputElement;
    if (name in errors) setError(name, "");
  }

  function changePhone(next: PhoneState) {
    setPhoneValue(next);
    if ("phone" in errors) setError("phone", "");
  }

  function changeHuman(checked: boolean) {
    setHuman(checked);
    if (checked) setError("human", "");
  }

  async function validatePhone(): Promise<{ message: string; e164?: string }> {
    if (!phone) return { message: "" };
    const lib = await import("@/lib/phone");
    const country = lib.getCountryList().find((item) => item.iso === phoneValue.iso);
    const message = lib.validateNational(phoneValue.iso, phoneValue.national, phone.required, country?.name ?? phoneValue.iso);
    const e164 = !message && phoneValue.national ? lib.toE164(phoneValue.iso, phoneValue.national) : undefined;
    return { message, e164 };
  }

  async function blurPhone() {
    if (!phoneValue.national) return setError("phone", "");
    setError("phone", (await validatePhone()).message);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const values: Record<string, string> = {};
    data.forEach((value, key) => {
      if (typeof value === "string") values[key] = value;
    });

    const nextErrors = validateFields(schema, values);
    const phoneResult = await validatePhone();
    if (phoneResult.message) nextErrors.phone = phoneResult.message;
    if (humanCheck && !human) nextErrors.human = HUMAN_ERROR;

    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const payload: LeadPayload = { source, subject: subject() };
    for (const [name, spec] of Object.entries(schema)) {
      payload[name] = spec.kind === "message" ? cleanText(values[name]) : cleanLine(values[name]);
    }
    if (values.interest) payload.interest = cleanLine(values.interest);
    if (phoneResult.e164) {
      payload.phone = phoneResult.e164;
      payload.phone_country = phoneValue.iso;
    }
    payload.botcheck = values.botcheck ? "1" : "";
    payload.human = "1";
    payload.elapsed_ms = String(Date.now() - openedAt.current);

    setStatus("loading");
    const ok = await submitLead(payload);
    setStatus(ok ? "success" : "error");
    if (ok) {
      form.reset();
      setPhoneValue({ iso: phoneValue.iso, national: "" });
      setHuman(false);
      setErrors({});
    }
  }

  const errorId = (name: string) => `${uid}-${name}-error`;

  return {
    status,
    setStatus,
    errors,
    /** Accessibility attributes for an input, set only while it has an error. */
    fieldProps: (name: string) => (errors[name] ? { "aria-invalid": true, "aria-describedby": errorId(name) } : {}),
    /** Props for the matching <FieldError /> element. */
    errorProps: (name: string) => ({ id: errorId(name), message: errors[name] }),
    phone: phoneValue,
    changePhone,
    blurPhone,
    human,
    changeHuman,
    formProps: { noValidate: true, onSubmit: handleSubmit, onBlur: handleBlur, onInput: handleInput },
  };
}
