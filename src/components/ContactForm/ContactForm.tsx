"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submitLead";
import styles from "./ContactForm.module.css";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    const ok = await submitLead(new FormData(form), "New enquiry — Atlantech Global Contact Page");
    setStatus(ok ? "success" : "error");
    if (ok) form.reset();
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      method="POST"
    >
      <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
      <input type="text" name="name" placeholder="Name" aria-label="Name" autoComplete="name" required />
      <div className={styles.row}>
        <input type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email" required />
        <input type="tel" name="phone" placeholder="Phone number" aria-label="Phone number" autoComplete="tel" />
      </div>
      <textarea name="message" placeholder="Write your message.." aria-label="Message" rows={5} required />
      <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="form-status success" role="status">
          Thanks! We&apos;ll be in touch within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="form-status error" role="alert">
          Something went wrong. Please email us directly at hello@atlantechglobal.com.
        </p>
      )}
    </form>
  );
}
