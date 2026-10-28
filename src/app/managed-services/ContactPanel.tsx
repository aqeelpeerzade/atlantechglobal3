"use client";

import { useState } from "react";
import type { FieldSpec } from "@/lib/validation";
import FieldError from "@/components/forms/FieldError";
import HumanCheck from "@/components/forms/HumanCheck";
import { useLeadForm } from "@/components/forms/useLeadForm";
import styles from "./page.module.css";

type Mode = "send" | "schedule";

const BASE_SCHEMA: Record<string, FieldSpec> = {
  first_name: { kind: "firstName", required: true },
  last_name: { kind: "lastName", required: true },
  email: { kind: "email", required: true },
  company: { kind: "company", required: true },
  message: { kind: "message", required: false },
};

const SCHEDULE_SCHEMA: Record<string, FieldSpec> = {
  ...BASE_SCHEMA,
  preferred_time: { kind: "preferredTime", required: true },
};

export default function ContactPanel({ source }: { source: string }) {
  const [mode, setMode] = useState<Mode>("send");
  const form = useLeadForm({
    schema: mode === "schedule" ? SCHEDULE_SCHEMA : BASE_SCHEMA,
    subject: () => `${mode === "send" ? "Consultation request" : "Call request"} — ${source}`,
    source,
  });
  const { status, fieldProps, errorProps } = form;

  const submitLabel = mode === "send" ? "Request consultation" : "Schedule call";

  return (
    <div className={styles.contactRight}>
      <div className={styles.formToggle}>
        <button type="button" aria-pressed={mode === "send"} onClick={() => setMode("send")}>
          Send Request
        </button>
        <button type="button" aria-pressed={mode === "schedule"} onClick={() => setMode("schedule")}>
          Schedule Call
        </button>
      </div>

      <form className={styles.form} {...form.formProps}>
        <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
        <div className={styles.fieldRow}>
          <label className={styles.field}>
            First name
            <input type="text" name="first_name" placeholder="Sarah" autoComplete="given-name" maxLength={50} required {...fieldProps("first_name")} />
            <FieldError {...errorProps("first_name")} />
          </label>
          <label className={styles.field}>
            Last name
            <input type="text" name="last_name" placeholder="Jenkins" autoComplete="family-name" maxLength={50} required {...fieldProps("last_name")} />
            <FieldError {...errorProps("last_name")} />
          </label>
        </div>
        <label className={styles.field}>
          Work email
          <input type="email" name="email" placeholder="sarah.jenkins@enterprise.com" autoComplete="email" maxLength={254} required {...fieldProps("email")} />
          <FieldError {...errorProps("email")} />
        </label>
        <label className={styles.field}>
          Company name
          <input type="text" name="company" placeholder="Global Logistics Corp" autoComplete="organization" maxLength={100} required {...fieldProps("company")} />
          <FieldError {...errorProps("company")} />
        </label>
        {mode === "schedule" && (
          <label className={styles.field}>
            Preferred date &amp; time
            <input type="datetime-local" name="preferred_time" required {...fieldProps("preferred_time")} />
            <FieldError {...errorProps("preferred_time")} />
          </label>
        )}
        <label className={styles.field}>
          How can we help?
          <textarea
            name="message"
            rows={4}
            maxLength={2000}
            placeholder="Tell us about your infrastructure goals, SLAs, or required team coverage..."
            {...fieldProps("message")}
          />
          <FieldError {...errorProps("message")} />
        </label>
        <HumanCheck checked={form.human} onChange={form.changeHuman} {...errorProps("human")} />
        <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : submitLabel}
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
    </div>
  );
}
