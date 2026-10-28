"use client";

import { ArrowIcon } from "@/lib/icons";
import type { FieldSpec } from "@/lib/validation";
import FieldError from "@/components/forms/FieldError";
import HumanCheck from "@/components/forms/HumanCheck";
import PhoneField from "@/components/forms/PhoneField";
import { useLeadForm } from "@/components/forms/useLeadForm";
import styles from "./ConsultationForm.module.css";

const INTEREST_OPTIONS = [
  "AI & Automation",
  "Digital Transformation",
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Product Engineering",
  "Managed Services",
];

const SCHEMA: Record<string, FieldSpec> = {
  first_name: { kind: "firstName", required: true },
  last_name: { kind: "lastName", required: true },
  email: { kind: "email", required: true },
  company: { kind: "company", required: false },
  message: { kind: "message", required: false },
};

export default function ConsultationForm({ source, flat = false }: { source: string; flat?: boolean }) {
  const form = useLeadForm({
    schema: SCHEMA,
    phone: { required: false },
    subject: () => `Consultation request — ${source}`,
    source,
  });
  const { status, fieldProps, errorProps } = form;

  return (
    <form className={`${styles.form}${flat ? ` ${styles.flat}` : ""}`} {...form.formProps}>
      <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
      <div className={styles.row}>
        <div className={styles.cell}>
          <input type="text" name="first_name" placeholder="First name" aria-label="First name" autoComplete="given-name" maxLength={50} required {...fieldProps("first_name")} />
          <FieldError {...errorProps("first_name")} />
        </div>
        <div className={styles.cell}>
          <input type="text" name="last_name" placeholder="Last name" aria-label="Last name" autoComplete="family-name" maxLength={50} required {...fieldProps("last_name")} />
          <FieldError {...errorProps("last_name")} />
        </div>
      </div>
      <div className={styles.cell}>
        <input type="email" name="email" placeholder="Work email" aria-label="Work email" autoComplete="email" maxLength={254} required {...fieldProps("email")} />
        <FieldError {...errorProps("email")} />
      </div>
      <div className={styles.row}>
        <PhoneField value={form.phone} onChange={form.changePhone} onBlur={form.blurPhone} {...errorProps("phone")} />
        <div className={styles.cell}>
          <input type="text" name="company" placeholder="Company name" aria-label="Company name" autoComplete="organization" maxLength={100} {...fieldProps("company")} />
          <FieldError {...errorProps("company")} />
        </div>
      </div>
      <select name="interest" defaultValue="" aria-label="Area of interest">
        <option value="" disabled>
          Area of interest
        </option>
        {INTEREST_OPTIONS.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <div className={styles.cell}>
        <textarea name="message" placeholder="Brief project scope or current challenges..." aria-label="Message" rows={4} maxLength={2000} {...fieldProps("message")} />
        <FieldError {...errorProps("message")} />
      </div>
      <HumanCheck checked={form.human} onChange={form.changeHuman} {...errorProps("human")} />
      <button type="submit" className="btn btn-primary full-width" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Request Consultation"} <ArrowIcon />
      </button>
      {status === "success" && (
        <p className="form-status success" role="status">
          Thanks! We&apos;ll be in touch within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="form-status error" role="alert">
          Something went wrong. Please email us at hello@atlantechglobal.com.
        </p>
      )}
      <p className={styles.privacy}>We respect your privacy. Your details are never shared.</p>
    </form>
  );
}
