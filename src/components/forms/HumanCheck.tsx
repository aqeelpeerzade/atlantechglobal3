"use client";

import { useEffect, useRef, useState } from "react";
import FieldError from "./FieldError";
import styles from "./forms.module.css";

const VERIFY_DELAY_MS = 700;

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  message?: string;
  id: string;
};

/** "I'm not a robot" checkbox that every lead form must tick before it can be submitted. */
export default function HumanCheck({ checked, onChange, message, id }: Props) {
  const [verifying, setVerifying] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  function toggle() {
    if (verifying) return;
    if (checked) return onChange(false);

    setVerifying(true);
    timer.current = setTimeout(() => {
      setVerifying(false);
      onChange(true);
    }, VERIFY_DELAY_MS);
  }

  return (
    <div className={styles.human}>
      <div className={styles.humanBox} data-invalid={Boolean(message)}>
        <button
          type="button"
          name="human"
          role="checkbox"
          aria-checked={checked}
          aria-busy={verifying}
          aria-invalid={Boolean(message)}
          aria-describedby={message ? id : undefined}
          className={styles.humanToggle}
          onClick={toggle}
        >
          <span className={`${styles.tick}${checked ? ` ${styles.tickDone}` : ""}`}>
            {verifying && <span className={styles.spinner} aria-hidden="true" />}
            {checked && (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path className={styles.checkPath} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
          I&apos;m not a robot
        </button>
        <span className={styles.brand} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
            <path d="M8.5 12l2.5 2.5L15.5 10" />
          </svg>
          <span>Human check</span>
        </span>
      </div>
      <FieldError id={id} message={message} />
    </div>
  );
}
