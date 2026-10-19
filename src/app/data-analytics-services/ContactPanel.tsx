"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submitLead";
import styles from "./page.module.css";

type Mode = "send" | "schedule";
type Status = "idle" | "loading" | "success" | "error";

export default function ContactPanel({ source }: { source: string }) {
  const [mode, setMode] = useState<Mode>("send");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    const subject = mode === "send" ? "Consultation request" : "Call request";
    const ok = await submitLead(new FormData(form), `${subject} — ${source}`);
    setStatus(ok ? "success" : "error");
    if (ok) form.reset();
  }

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

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
        <div className={styles.fieldRow}>
          <label className={styles.field}>
            First name
            <input type="text" name="first_name" placeholder="Sarah" autoComplete="given-name" required />
          </label>
          <label className={styles.field}>
            Last name
            <input type="text" name="last_name" placeholder="Jenkins" autoComplete="family-name" required />
          </label>
        </div>
        <label className={styles.field}>
          Work email
          <input type="email" name="email" placeholder="sarah.jenkins@enterprise.com" autoComplete="email" required />
        </label>
        <label className={styles.field}>
          Company name
          <input type="text" name="company" placeholder="Global Logistics Corp" autoComplete="organization" required />
        </label>
        {mode === "schedule" && (
          <label className={styles.field}>
            Preferred date &amp; time
            <input type="datetime-local" name="preferred_time" required />
          </label>
        )}
        <label className={styles.field}>
          How can we help?
          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about your current data pipeline challenges or objectives..."
          />
        </label>
        <button type="submit" className={styles.submitBtn} disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : mode === "send" ? "Request Consultation" : "Schedule Call"}
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
