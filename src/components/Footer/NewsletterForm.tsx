"use client";

import type { FieldSpec } from "@/lib/validation";
import FieldError from "@/components/forms/FieldError";
import { useLeadForm } from "@/components/forms/useLeadForm";
import styles from "./Footer.module.css";

const SCHEMA: Record<string, FieldSpec> = {
  email: { kind: "email", required: true },
};

export default function NewsletterForm() {
  const form = useLeadForm({
    schema: SCHEMA,
    subject: () => "Newsletter subscription — Atlantech Global",
    source: "Footer newsletter",
    humanCheck: false,
  });
  const { status, fieldProps, errorProps } = form;

  return (
    <>
      <form className={styles.newsletter} {...form.formProps}>
        <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
        <div className={styles.subscribe}>
          <label htmlFor="newsletter-email" className="sr-only">
            Work email
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="Work email"
            autoComplete="email"
            maxLength={254}
            required
            {...fieldProps("email")}
          />
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </div>
        <FieldError {...errorProps("email")} />
      </form>
      {status === "success" && <p className={styles.message}>Thanks — you&apos;re subscribed.</p>}
      {status === "error" && <p className={`${styles.message} ${styles.error}`}>Something went wrong. Please try again.</p>}
    </>
  );
}
