"use client";

import type { FieldSpec } from "@/lib/validation";
import FieldError from "@/components/forms/FieldError";
import HumanCheck from "@/components/forms/HumanCheck";
import { useLeadForm } from "@/components/forms/useLeadForm";
import styles from "./page.module.css";

const BASE_SCHEMA: Record<string, FieldSpec> = {
  first_name: { kind: "firstName", required: true },
  last_name: { kind: "lastName", required: true },
  email: { kind: "email", required: true },
  company: { kind: "company", required: true },
  message: { kind: "message", required: false },
};

export default function ContactPanel({ source }: { source: string }) {
  const form = useLeadForm({
    schema: BASE_SCHEMA,
    subject: () => `Consultation request — ${source}`,
    source,
  });
  const { status, fieldProps, errorProps } = form;

  return (
    <form className={styles.form} {...form.formProps}>
      <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
      <div className={styles.fieldRow}>
        <label className={styles.field}>
          First name
          <input type="text" name="first_name" placeholder="Jane" autoComplete="given-name" maxLength={50} required {...fieldProps("first_name")} />
          <FieldError {...errorProps("first_name")} />
        </label>
        <label className={styles.field}>
          Last name
          <input type="text" name="last_name" placeholder="Doe" autoComplete="family-name" maxLength={50} required {...fieldProps("last_name")} />
          <FieldError {...errorProps("last_name")} />
        </label>
      </div>
      <label className={styles.field}>
        Work email
        <input type="email" name="email" placeholder="jane.doe@enterprise.com" autoComplete="email" maxLength={254} required {...fieldProps("email")} />
        <FieldError {...errorProps("email")} />
      </label>
      <label className={styles.field}>
        Company name
        <input type="text" name="company" placeholder="Global Logistics Corp" autoComplete="organization" maxLength={100} required {...fieldProps("company")} />
        <FieldError {...errorProps("company")} />
      </label>
      <label className={styles.field}>
        How can we help?
        <textarea
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Tell us about your current operational challenges, automation targets, or data platforms..."
          {...fieldProps("message")}
        />
        <FieldError {...errorProps("message")} />
      </label>
      <HumanCheck checked={form.human} onChange={form.changeHuman} {...errorProps("human")} />
      <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Start AI Automation"}
      </button>
      {status === "success" && (
        <p className="form-status success" role="status">
          Thanks! Our team will reach out within 2 hours.
        </p>
      )}
      {status === "error" && (
        <p className="form-status error" role="alert">
          Something went wrong. Please email us at hello@atlantechglobal.com.
        </p>
      )}
    </form>
  );
}
