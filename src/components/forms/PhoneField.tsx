"use client";

import { useEffect, useId, useMemo, useRef, useState, type ChangeEvent, type ClipboardEvent, type KeyboardEvent } from "react";
import type { Country, CountryCode } from "@/lib/phone";
import { DEFAULT_COUNTRY } from "@/lib/phoneDefaults";
import FieldError from "./FieldError";
import styles from "./forms.module.css";

type PhoneLib = typeof import("@/lib/phone");

export type PhoneValue = { iso: CountryCode; national: string };

type Props = {
  value: PhoneValue;
  onChange: (value: PhoneValue) => void;
  onBlur: () => void;
  message?: string;
  id: string;
  required?: boolean;
};

const FALLBACK_COUNTRY: Country = { iso: DEFAULT_COUNTRY, name: "India", dial: "+91" };

function Flag({ iso }: { iso: string }) {
  const code = iso.toLowerCase();
  return (
    // Flags are tiny decorative images fetched on demand from flagcdn.com.
    <img
      className={styles.flag}
      src={`https://flagcdn.com/w20/${code}.png`}
      srcSet={`https://flagcdn.com/w40/${code}.png 2x`}
      width={20}
      height={15}
      alt=""
      loading="lazy"
      decoding="async"
      onError={(event) => {
        event.currentTarget.style.visibility = "hidden";
      }}
    />
  );
}

/** Phone input with a searchable country-code dropdown and per-country length validation. */
export default function PhoneField({ value, onChange, onBlur, message, id, required }: Props) {
  const [lib, setLib] = useState<PhoneLib | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [openUp, setOpenUp] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    let cancelled = false;
    import("@/lib/phone").then((module) => {
      if (!cancelled) setLib(module);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  const countries = useMemo(() => (lib ? lib.getCountryList() : [FALLBACK_COUNTRY]), [lib]);
  const selected = countries.find((country) => country.iso === value.iso) ?? FALLBACK_COUNTRY;
  const rule = lib?.getPhoneRule(value.iso);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return countries;
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(term) || country.dial.includes(term) || country.iso.toLowerCase() === term,
    );
  }, [countries, query]);

  const activeId = filtered[active] ? `${listId}-${filtered[active].iso}` : undefined;

  useEffect(() => {
    if (open && activeId) document.getElementById(activeId)?.scrollIntoView({ block: "nearest" });
  }, [open, activeId]);

  function toggleList() {
    if (!open) {
      const space = window.innerHeight - (trigger.current?.getBoundingClientRect().bottom ?? 0);
      setOpenUp(space < 320);
      setQuery("");
      setActive(Math.max(0, countries.findIndex((country) => country.iso === value.iso)));
    }
    setOpen(!open);
  }

  function choose(country: Country) {
    const digits = lib ? value.national.slice(0, lib.maxInputLength(country.iso, value.national)) : value.national;
    onChange({ iso: country.iso, national: digits });
    setOpen(false);
    trigger.current?.focus();
  }

  function handleSearchKey(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => Math.min(index + 1, filtered.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (filtered[active]) choose(filtered[active]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      trigger.current?.focus();
    }
  }

  function handleNumber(event: ChangeEvent<HTMLInputElement>) {
    let digits = event.target.value.replace(/\D/g, "");
    digits = digits.slice(0, lib ? lib.maxInputLength(value.iso, digits) : 15);
    onChange({ iso: value.iso, national: digits });
  }

  /** Pasting "+91 98765 43210" selects India and fills in the national number. */
  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    const parsed = lib?.parseInternational(event.clipboardData.getData("text"));
    if (!parsed) return;
    event.preventDefault();
    onChange({ iso: parsed.iso, national: parsed.national });
  }

  return (
    <div className={styles.phone} ref={root}>
      <div className={styles.group} data-invalid={Boolean(message)}>
        <button
          ref={trigger}
          type="button"
          className={styles.trigger}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listId : undefined}
          aria-label={`Country code: ${selected.name} ${selected.dial}`}
          onClick={toggleList}
        >
          <Flag iso={selected.iso} />
          <span>{selected.dial}</span>
          <svg className={styles.chevron} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <input
          className={styles.number}
          type="tel"
          name="phone"
          inputMode="numeric"
          autoComplete="tel-national"
          placeholder={rule?.example || "Phone number"}
          aria-label="Phone number"
          aria-required={required}
          aria-invalid={Boolean(message)}
          aria-describedby={message ? id : undefined}
          value={value.national}
          onChange={handleNumber}
          onPaste={handlePaste}
          onBlur={onBlur}
        />
      </div>

      {open && (
        <div className={styles.popup} data-up={openUp}>
          <input
            className={styles.search}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-controls={listId}
            aria-activedescendant={activeId}
            aria-label="Search country or dial code"
            placeholder="Search country or code"
            autoComplete="off"
            autoFocus
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            onKeyDown={handleSearchKey}
          />
          <ul className={styles.list} id={listId} role="listbox" aria-label="Countries">
            {filtered.map((country, index) => (
              <li
                key={country.iso}
                id={`${listId}-${country.iso}`}
                role="option"
                aria-selected={country.iso === value.iso}
                data-active={index === active}
                className={styles.option}
                onPointerEnter={() => setActive(index)}
                onClick={() => choose(country)}
              >
                <Flag iso={country.iso} />
                <span className={styles.optionName}>{country.name}</span>
                <span className={styles.optionDial}>{country.dial}</span>
              </li>
            ))}
            {filtered.length === 0 && <li className={styles.empty}>No country found</li>}
          </ul>
        </div>
      )}

      <FieldError id={id} message={message} />
    </div>
  );
}
