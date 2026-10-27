"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submitLead";
import { ArrowIcon } from "@/lib/icons";
import styles from "./ConsultationForm.module.css";

const INTEREST_OPTIONS = [
  "AI & Automation",
  "Digital Transformation",
  "Cloud & Infrastructure",
  "Data & Analytics",
  "Product Engineering",
  "Managed Services",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ConsultationForm({ source, flat = false }: { source: string; flat?: boolean }) {
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
    <form
      className={`${styles.form}${flat ? ` ${styles.flat}` : ""}`}
      onSubmit={handleSubmit}
      method="POST"
    >
      <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
      <div className={styles.row}>
        <input type="text" name="first_name" placeholder="First name" aria-label="First name" autoComplete="given-name" required />
        <input type="text" name="last_name" placeholder="Last name" aria-label="Last name" autoComplete="family-name" required />
      </div>
      <input type="email" name="email" placeholder="Work email" aria-label="Work email" autoComplete="email" required />
      <div className={styles.row}>
        <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" autoComplete="tel" />
        <input type="text" name="company" placeholder="Company name" aria-label="Company name" autoComplete="organization" />
      </div>
      <select name="interest" defaultValue="" aria-label="Area of interest">
        <option value="" disabled>
          Area of interest
        </option>
        {INTEREST_OPTIONS.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <textarea name="message" placeholder="Brief project scope or current challenges..." aria-label="Message" rows={4} />
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
