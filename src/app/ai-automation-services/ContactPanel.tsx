"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submitLead";
import styles from "./page.module.css";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPanel({ source }: { source: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    const ok = await submitLead(new FormData(form), `Consultation request — ${source}`);
    setStatus(ok ? "success" : "error");
    if (ok) form.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
      <div className={styles.fieldRow}>
        <label className={styles.field}>
          First name
          <input type="text" name="first_name" placeholder="Jane" autoComplete="given-name" required />
        </label>
        <label className={styles.field}>
          Last name
          <input type="text" name="last_name" placeholder="Doe" autoComplete="family-name" required />
        </label>
      </div>
      <label className={styles.field}>
        Work email
        <input type="email" name="email" placeholder="jane.doe@enterprise.com" autoComplete="email" required />
      </label>
      <label className={styles.field}>
        Company name
        <input type="text" name="company" placeholder="Global Logistics Corp" autoComplete="organization" required />
      </label>
      <label className={styles.field}>
        How can we help?
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your current operational challenges, automation targets, or data platforms..."
        />
      </label>
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
