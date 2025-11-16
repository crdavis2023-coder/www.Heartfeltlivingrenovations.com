# Copilot Instructions for Heartfelt Living Renovations

## Project Overview

- **Name:** Heartfelt Living Renovations — marketing site
- **Stack:** Next.js 13.5 (pages router), React 18, Tailwind CSS, SWR, SendGrid, `next-sitemap`.
- **Purpose:** Marketing and lead-generation site for Heartfelt Living Renovations LLC with:
  - Service overviews (kitchens, baths, whole-home, handyman).
  - Pricing/FAQs/testimonials pages.
  - Contact / estimate / schedule flows that send email via SendGrid.
  - SEO metadata and sitemap/robots for search visibility.

## Primary Goal for Copilot

Copilot's top priority for this repository:

**Make the website production-ready and deployable to Vercel with no Next.js build errors and no obvious runtime errors on core pages (home, services, pricing, testimonials, FAQ, schedule, estimate, contact).**

When working on issues/PRs, Copilot should:

- Ensure `npm run build` passes without errors or warnings that indicate broken routes or imports.
- Keep main flows working:
  - Navigation between main pages.
  - Contact / estimate / schedule forms submit successfully and handle errors gracefully.
- Preserve brand and content while improving structure, reliability, and maintainability.

## How to Build, Run, and Test

**Local setup**

```bash
npm install
cp .env.example .env.local
# fill values for SENDGRID and email env vars
npm run dev
```

**Production build / run**

```bash
npm run build
npm start
```

Copilot should treat the following as minimum acceptance checks before considering work "done":

- `npm run build` succeeds.
- `npm start` runs without crashing.
- No broken imports or 404s for the core pages linked from the header/footer.
- The contact/estimate/schedule forms POST successfully to `/api/contact` and return a sensible JSON response `{ ok: true }` or a clear error.

If tests are later added, also ensure all tests pass.

## Repository Structure

Key files and responsibilities:

**Root page components (Next.js pages):**

- `index.js` – home page.
- `about.js` – about/overview page.
- `services.js` – services listing.
- `pricing.js` – pricing tiers.
- `testimonials.js` – customer quotes.
- `schedule.js` / `estimate.js` / `contact.js` – lead capture forms.
- `faq.js` – common questions.
- `[slug].js` – generic content / detail pages.
- `_app.js`, `_document.js` – global app and document wrappers.

**Shared UI & SEO:**

- `Layout.js` – wraps pages with Header / Footer.
- `Header.js`, `Footer.js` – site chrome/navigation/footer.
- `SEO.js` – meta tags for basic SEO.

**API & config:**

- `pages/api/contact.js` – SendGrid-based email handler.
- `.env.example` – sample environment variables.
- `next.config.js` – Next.js config.
- `next-sitemap.js` – sitemap/robots generation.
- `tailwind.config.js`, `postcss.config.js` – styling pipeline.
- `logo.png`, `*-before.jpg`, `*-after.jpg` – image assets.

Copilot should prefer reusing these structures rather than introducing new patterns.

## Coding Standards and Conventions

**React / Next.js**

- Use functional components and hooks.
- Keep pages focused on layout + data wiring; move shared UI into components like Header, Footer, Layout.
- Keep API routes in `pages/api/*` and avoid server logic in client components.

**Styling**

- Use Tailwind utility classes (as already in the project).
- Avoid adding new CSS frameworks; only add minimal custom CSS if absolutely needed.
- Maintain responsive layouts (mobile-first) and avoid horizontal scroll on small screens.

**Env / Secrets**

- Never hard-code secrets or API keys.
- Use environment variables defined in `.env.example` and documented in `README.md`.
- Align names between code and `.env.example` / `README`. For example, if `.env.example` uses `EMAIL_TO` / `EMAIL_FROM`, do not invent new names like `CONTACT_TO_EMAIL` unless all docs and sample env files are updated together.

**Contact / Email flow**

- `pages/api/contact.js` should:
  - Use `process.env.SENDGRID_API_KEY` for SendGrid.
  - Read the same env var names that are documented in `.env.example` and `README` for "to/from" email addresses.
  - Avoid hard-coded addresses for production; fallbacks may be used only as obvious safe defaults.
  - Handle bad input and SendGrid errors with clear error responses (non-200 status, `{ error: string }` JSON).

**Docs**

- If behavior or env variables change, update:
  - `.env.example`
  - `README.md`
  - `README_DEPLOYMENT.md` if necessary.

## Deployment (Vercel)

Vercel is the primary deployment target.

Copilot should:

- Keep `README.md` deployment section accurate for Vercel:
  - `SITE_URL`
  - `NEXT_PUBLIC_SITE_URL`
  - `SENDGRID_API_KEY`
  - `EMAIL_TO`
  - `EMAIL_FROM`
- Ensure `next-sitemap` uses the correct site URL so sitemap/robots match the deployed domain.
- Avoid adding deployment steps that conflict with Vercel's default Next.js setup (no custom server unless explicitly requested).

**Definition of "ready to deploy" for this project:**

- `npm run build` passes locally (no errors, no obvious Next.js warnings about missing pages).
- App boots with `npm start`.
- All main routes linked from the header/footer render without unhandled errors.
- Contact/estimate/schedule flows:
  - Validate required fields.
  - Call `/api/contact` with the expected JSON body.
  - Display success and error states.

## Change Scope & Non-Goals

**Copilot may:**

- Refactor components for clarity (while preserving behavior).
- Fix bugs, broken links, layout issues, env name mismatches.
- Add small, targeted utilities and helpers.

**Copilot should avoid unless explicitly asked:**

- Large-scale rewrites of the app or architecture.
- Changing the core stack (Next, React, Tailwind).
- Introducing heavy new dependencies (e.g., full design systems, large testing frameworks) without clear benefit.

If a change requires something large (new dependency, major re-architecture), Copilot should keep the PR small and explain the reasoning clearly in the description.

## Expectations for Issues and Pull Requests

When Copilot is assigned to work on issues or PRs:

- Respect the acceptance criteria in the issue description.
- Prefer minimal changes that satisfy the requirements.
- Add or update tests to cover new behavior where appropriate.
- Keep commit and PR messages clear and descriptive.
- Avoid changing unrelated code.

## Areas to Avoid or Treat Carefully

Copilot should be conservative in these areas unless explicitly instructed:

**Secrets and credentials**

- Never introduce plaintext secrets, keys, tokens, or passwords.
- Assume secrets come from environment variables, secrets management, or CI configuration.

**Security-sensitive code**

- Authentication, authorization, encryption, and payment flows must be changed only when explicitly requested.
- When changing these areas, add tests and explain changes clearly in the PR description.

**Infrastructure / deployment**

- Only modify infra / deployment files (for example in `infra/`, `deploy/`, `.github/workflows/`) when the task specifically requires it.

## Testing Guidelines

When adding or modifying functionality:

- Prefer unit tests for new logic.
- Keep tests deterministic and fast.
- Mirror existing test style and structure (file naming, fixtures, helpers).
- If fixing a bug, add a regression test that fails before the fix and passes after.

## Non-Goals for Copilot

Unless specifically asked, Copilot should **not**:

- Perform large-scale rewrites of the codebase.
- Change library choices or major architectural patterns.
- Introduce dependencies that are not already used in the project.
- Modify license files or legal text.

---

_These instructions apply to all tasks Copilot works on in this repository, including coding agent, Copilot Chat, and Copilot code review._
