# Fixes and Improvements

What was changed, and why. Everything below was verified with `tsc --noEmit`, `eslint src` (0 errors, 0 warnings) and `next build` in both deployment modes.

## 1. Security: the form access key was visible in the browser

| What | Why |
|---|---|
| Removed `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` from `next.config.ts` | `env:` in the config inlines the value into the client JavaScript and every form request. Anyone could read it in DevTools. |
| `src/lib/submitLead.ts` no longer reads or sends any key | The browser now posts JSON to our own endpoint only. |
| New `src/app/api/lead/route.server.ts` | Holds the key in the server-only `WEB3FORMS_ACCESS_KEY`, validates the request again, then forwards it to Web3Forms. |
| New `public/api/lead.php` | The same proxy for static hosting (cPanel / shared hosting), where Node routes do not exist. |
| New `.env.example` | Documents the variables. `.gitignore` still blocks real `.env*` files. |
| Server checks: origin, rate limit (5/min/IP), honeypot, minimum fill time, field whitelist, length caps | The old route accepted any field and any size from anyone. |

Setup: copy `.env.example` to `.env.local` and set `WEB3FORMS_ACCESS_KEY`. Rotate the old key in the Web3Forms dashboard, because it was public.

## 2. Forms

All forms now share one implementation in `src/components/forms/`:

- `useLeadForm.ts` — validation on blur and on submit, focus on the first invalid field, loading/success/error state.
- `PhoneField.tsx` — searchable country dropdown with flag and dial code. Digits only, input capped per country, validated against real numbering plans (libphonenumber-js, mobile metadata). Pasting `+91 98765 43210` selects the country automatically. Loaded lazily so it does not slow the first render.
- `HumanCheck.tsx` — the "I'm not a robot" checkbox. Submission is blocked until it is ticked. Used on every form except the footer newsletter (removed on request).
- `FieldError.tsx` — accessible inline errors (`aria-invalid`, `aria-describedby`, `role="alert"`).
- `src/lib/validation.ts` — one set of rules used by the browser and the server (names, email, company, message, preferred time).

Forms updated: Consultation, Contact, Footer newsletter, and the five service-page `ContactPanel`s (the duplicated submit code in each was replaced by the shared hook).

Notes:
- The human check is a client-side checkbox plus server-side honeypot/timing/rate-limit. It is not a Google reCAPTCHA or Cloudflare Turnstile. For stronger protection against determined bots, add Turnstile (free) later.
- Phone validation uses mobile numbers. Landline-only numbers are rejected.
- Phone remains optional where it was optional before. The service-page panels never had a phone field, so none was added.

## 3. Bugs

| Bug | Fix |
|---|---|
| `calc(10    0svh + 85px)` in `HeroScroll.tsx` was invalid CSS, so the hero height was ignored | Corrected to `calc(100svh + 85px)`. |
| `import { link } from "fs"` in `ai-automation-services/page.tsx` (a Node module in a page) | Removed. |
| `POST` route handler cannot work with `output: "export"` | Export is now opt-in via `STATIC_EXPORT=true`; the API route is excluded from static builds. |
| `sitemap.ts` had `"managed-services"` without a leading slash and listed only 5 pages | Rewritten with all 42 real routes. |
| ESLint scanned `out_backup_*` and reported 10 false errors | Folder added to ignores. |
| Stale `.next` types referenced a deleted `src/app/page.tsx` | Cleaned build output. |

## 4. Performance

| Change | Effect |
|---|---|
| 6 oversized PNGs converted to WebP (`platform-page`, `careers-page`, `tesingandqa-page`, `prodengineering`, `industry-image`, `ai-strategy-services`) | About 4.7 MB down to about 0.26 MB. |
| Hero video now prefers `hero.webm` (7.7 MB) over `hero.mp4` (50 MB) when the browser supports it | Much less data on the first screen. |
| Below-the-fold `<img>` tags got `loading="lazy"` and `decoding="async"` | Faster first paint. |
| Phone/country data loaded with a dynamic import | Not part of the initial JavaScript. |
| Security headers and `poweredByHeader: false` (server mode) | Hardening at no cost. |

Still recommended (needs a video tool such as ffmpeg, not available here):
- Re-encode `public/videos/hero.mp4` (50 MB) to about 3 MB (720p, H.264, no audio).
- `public/videos/hero2.mp4` (28 MB) is not used anywhere and can be deleted.
- Unused images in `public/images` (for example `footer.jpg`, `atgl-transparent.png`) can be deleted.
- Slowness in `npm run dev` is normal. Judge speed with `npm run build && npm start`.

## 5. Code quality

- Removed about 270 lines of commented-out code (old FAQ copies, disabled menu items, disabled metadata) and 5 unused data arrays.
- Removed unused imports and variables (lint warnings went from 14 to 0).
- Disabled `@next/next/no-img-element`: images are intentionally unoptimized static files with explicit sizes.
- All user-facing text and comments are in English.

## 6. Not changed (needs your input)

- Footer: left exactly as it was, as requested.
- Duplicate route folders `cloud-infrastructure-services/multi-cloud-envinments` (typo) and `multi-cloud-environments`, plus `ai-strategy-enginnering`. Renaming changes public URLs, so add redirects first.
- About 14 near-identical `*faq.tsx` components could become one shared component.

## Deployment

Node hosting (Vercel, VPS): `npm run build && npm start` with `WEB3FORMS_ACCESS_KEY` set.

Static hosting: 

```powershell
$env:STATIC_EXPORT = "true"
$env:NEXT_PUBLIC_LEAD_ENDPOINT = "/agbeta3/api/lead.php"
npm run build
```

Upload `out/`, then put the key in `lead-config.php` one folder above the web root: `<?php return ['access_key' => 'YOUR_KEY'];`. `lead.php` has not been run on a PHP server yet.
