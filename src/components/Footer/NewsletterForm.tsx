"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submitLead";
import styles from "./Footer.module.css";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    const ok = await submitLead(new FormData(form), "Newsletter subscription — Atlantech Global");
    setStatus(ok ? "success" : "error");
    if (ok) form.reset();
  }

  return (
    <>
      <form
        className={styles.subscribe}
        onSubmit={handleSubmit}
        method="POST"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Work email
        </label>
        <input id="newsletter-email" type="email" name="email" placeholder="Work email" autoComplete="email" required />
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "..." : "Subscribe"}
        </button>
      </form>
      {status === "success" && <p className={styles.message}>Thanks — you&apos;re subscribed.</p>}
      {status === "error" && <p className={`${styles.message} ${styles.error}`}>Something went wrong. Please try again.</p>}
    </>
  );
}
