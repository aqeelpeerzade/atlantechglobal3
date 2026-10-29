"use client";

import type { FieldSpec } from "@/lib/validation";
import FieldError from "@/components/forms/FieldError";
import HumanCheck from "@/components/forms/HumanCheck";
import PhoneField from "@/components/forms/PhoneField";
import { useLeadForm } from "@/components/forms/useLeadForm";
import styles from "./ContactForm.module.css";

const SCHEMA: Record<string, FieldSpec> = {
  name: { kind: "fullName", required: true },
  email: { kind: "email", required: true },
  message: { kind: "message", required: true },
};

const SOURCE = "Contact page";

export default function ContactForm() {
  const form = useLeadForm({
    schema: SCHEMA,
    phone: { required: false },
    subject: () => "New enquiry — Atlantech Global Contact Page",
    source: SOURCE,
  });
  const { status, fieldProps, errorProps } = form;

  return (
    <form className={styles.form} {...form.formProps}>
      <input type="checkbox" name="botcheck" hidden tabIndex={-1} autoComplete="off" />
      <div className={styles.cell}>
        <input type="text" name="name" placeholder="Name" aria-label="Name" autoComplete="name" maxLength={100} required {...fieldProps("name")} />
        <FieldError {...errorProps("name")} />
      </div>
      <div className={styles.row}>
        <div className={styles.cell}>
          <input type="email" name="email" placeholder="Email" aria-label="Email" autoComplete="email" maxLength={254} required {...fieldProps("email")} />
          <FieldError {...errorProps("email")} />
        </div>
        <PhoneField value={form.phone} onChange={form.changePhone} onBlur={form.blurPhone} {...errorProps("phone")} />
      </div>
      <div className={styles.cell}>
        <textarea name="message" placeholder="Write your message.." aria-label="Message" rows={5} maxLength={2000} required {...fieldProps("message")} />
        <FieldError {...errorProps("message")} />
      </div>
      <HumanCheck checked={form.human} onChange={form.changeHuman} {...errorProps("human")} />
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
