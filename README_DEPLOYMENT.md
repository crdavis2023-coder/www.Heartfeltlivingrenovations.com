# Deployment & Configuration Guide (for Heartfelt Living Renovations)

## 1) Prepare GitHub repository
- Create a new GitHub repository (private or public) and push the project files.
  ```bash
  cd path/to/Heartfelt-Living-Renovations--main
  git init
  git add .
  git commit -m "Initial site for Heartfelt Living Renovations"
  git branch -M main
  git remote add origin https://github.com/YOURUSERNAME/YOURREPO.git
  git push -u origin main
  ```

## 2) Connect to Vercel
- Sign in to Vercel and import the GitHub repo. Use the Next.js preset (Vercel detects automatically).
- Set environment variables in Vercel dashboard (Settings -> Environment Variables):
  - `NEXT_PUBLIC_STRIPE_LINK` : your Stripe payment link or checkout URL
  - `GOOGLE_SCHEDULE_LINK` : your Google Calendar appointment scheduling link

## 3) Stripe / Payments
- Create a Stripe account and set up Payment Links (Products → Payment Links) or Checkout Sessions. Copy the public link and paste into `NEXT_PUBLIC_STRIPE_LINK` in Vercel environment variables.
- Alternatively, add your PayPal.Me link in `payments.js` or update the href with your PayPal.Me username.

## 4) Google Calendar — customer scheduling
- In Google Calendar (web), create an Appointment schedule or use Google Workspace's Appointment scheduling to create a booking page.
- Copy the public scheduling link and paste it into Vercel env `GOOGLE_SCHEDULE_LINK`. Or paste it into `contact.js` where the Schedule CTA is.

## 5) SEO & Domain
- In Vercel, add your custom domain `HeartfeltLivingRenovations.com` (Domains -> Add).
- Configure Google Business Profile for your business to improve local SEO (business.google.com).

## 6) Final checks
- Test on mobile and desktop. After deploy, use Google PageSpeed Insights and Lighthouse to check performance.

## 7) Updating content after deploy
- Make edits locally, push to GitHub, and Vercel will trigger automatic redeploys.