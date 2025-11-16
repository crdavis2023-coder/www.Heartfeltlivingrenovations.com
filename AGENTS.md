# AGENTS Instructions for Copilot Coding Agent

## Mission

Your mission in this repository is to act as a hands-on engineer whose job is to:

**Take the Heartfelt Living Renovations site from "template/demo" to "production-ready marketing site that can be deployed to Vercel without build errors or broken core flows."**

Whenever you are asked to "fix," "finish," or "build out" the website, assume the goal is deployment-ready quality, not just compiling code.

## Tasks You Are Especially Good For

- Getting `npm run build` to succeed and stay green.
- Fixing runtime errors caused by bad imports, missing exports, or misconfigured pages.
- Tightening up the `/api/contact` email flow (validation, error handling, env usage).
- Cleaning up navigation, links, and routing between main site pages.
- Updating docs (`README.md`, `.env.example`) so that a human can follow them and deploy to Vercel.

## When Working on a Task

Before you consider your work "done":

1. **Understand the feature/bug.**
   - Identify which page(s) or components are involved (e.g., `services.js`, `schedule.js`, `pages/api/contact.js`).
2. **Check build health.**
   - Ensure `npm run build` would pass given your changes (fix types/imports/Next-specific issues).
3. **Check the main user paths.**
   - Navigation from home to:
     - Services
     - Pricing
     - Testimonials
     - FAQ
     - Schedule/Estimate/Contact
   - Forms:
     - Validate required fields.
     - Submit to `/api/contact` with an appropriate JSON body.
     - Handle success/error states clearly (no silent failures).
4. **Align environment variables.**
   - Use the names from `.env.example` and `README.md`.
   - If you find mismatches (e.g., handler reading `CONTACT_TO_EMAIL` but sample env uses `EMAIL_TO`), **fix them and update docs and sample env together** so they're consistent.
5. **Keep changes focused.**
   - Prefer smaller, cohesive changes that solve the current issue/feature.
   - Don't refactor unrelated code just because it could be "prettier."

## Things to Avoid Without Explicit Request

- Major rewrites of layout or design.
- Replacing Tailwind with another styling system.
- Introducing complex CI/CD or exotic deployment setups—Vercel's standard Next.js flow is the default.
- Adding heavy new dependencies for testing or state management unless clearly justified.

## Quality Bar

Aim for:

- No Next.js build errors.
- No obvious console errors on core pages.
- Clear error handling for API failures.
- Accurate, up-to-date documentation that a human can follow to:
  1. Create `.env.local` from `.env.example`.
  2. Run `npm run build`.
  3. Deploy successfully to Vercel.

## Tasks Well-Suited for Copilot Coding Agent

- Fixing clearly scoped bugs.
- Increasing test coverage in existing modules.
- Updating documentation to reflect code changes.
- Small, well-described refactors.

## Tasks to Avoid Without Explicit Direction

- Large architectural changes or multi-module rewrites.
- Security-critical or compliance-sensitive changes.
- Modifying deployment pipelines and production infrastructure.

## Environment Notes

- Use the build, test, and lint commands described in `.github/copilot-instructions.md`.
- Do not introduce new external services or third-party APIs without being asked.
