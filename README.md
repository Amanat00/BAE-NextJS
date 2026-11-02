# BAE — Business Automations Expert

Multi-page Next.js App Router website created from the supplied Renova Tech single-page starter and original image assets. The content focus is exclusively: CRM & Automation, Business Process Automation, and Workflow & App Integrations. Resource/blog pages and fake case-study claims are omitted.

## Start locally

```bash
npm install
cp .env.example .env.local
npm run dev
npm run build
```

## Contact form (required setup)

The contact form POSTs to `/api/contact`. The backend validates inputs, includes a spam honeypot and basic throttling, and sends through Resend's server-side API. It does **not** claim success when the provider is unconfigured. Configure `RESEND_API_KEY`, a **verified** `CONTACT_FROM_EMAIL` and `CONTACT_TO_EMAIL` in `.env.local`. Test delivery to the real recipient before deploying.

**IMPORTANT EMAIL TYPO:** The requested recipient was `devstack912@gmaill.com` (double `l` after `gmai`). Please confirm whether this is intentional or should be `devstack912@gmail.com`. The app uses the **exact provided value by default**; no assumption has been made.

Protect your production endpoint with a shared-store rate limiter and CAPTCHA if spam increases. The in-memory limiter is best-effort only.

## Proxima Nova licensing

Proxima Nova is commercial. Adobe Fonts allows use via your own web-project embed, but font files from Adobe cannot be legally self-hosted. Set `NEXT_PUBLIC_ADOBE_FONTS_KIT_ID` to your **own licensed** Adobe Fonts project containing Proxima Nova Regular/Medium/Semibold. Alternatively add properly licensed WOFF2 fonts and an `@font-face` block to `app/globals.css`. This archive does not contain unlicensed fonts. Until the font is properly configured, the browser uses the system fallback and exact Proxima Nova appearance is not guaranteed.

## Visuals and credibility

Images under `/public/images/projects` come from the provided starter. Portfolio entries are labeled **illustrative workflow concepts** rather than verified case studies. Team illustrations are **generated role visuals** and explicitly not identified as actual employees.

## Animation

GSAP/ScrollTrigger provides subtle parallax, SVG path progression and scroll-linked card motion. IntersectionObserver powers accessible reveal transitions; the system honors `prefers-reduced-motion`. Cursor-following effects are restricted to section background-only areas (no motion applied to content cards, photos or form controls). Sticky/animated sections have mobile-friendly layouts.

## Routes

Home `/`, Services `/services`, detail pages for three services, Solutions `/solutions` and four solution narratives, Portfolio `/portfolio` and three illustrative concept pages, About `/about`, Process `/process`, Expertise `/team`, Contact `/contact`, and POST `/api/contact`. There are no `/resources` or `/blog` page routes.

## Honest verification

Source syntax and archive integrity can be checked offline. A production Next.js build requires `npm install`, and the runtime form requires real Resend credentials. Review `QA_REPORT.md` for results and outstanding checks.
