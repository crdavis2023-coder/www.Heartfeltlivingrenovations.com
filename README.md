# Heartfelt Living Renovations — Next.js Site

## Quick star

```bash
npm install
cp .env.example .env.local
# fill in SENDGRID keys
npm run dev
```

## Deploy to Vercel

1. Create a new project on <https://vercel.com> and import this repo (or upload zip).
2. Set Environment Variables in Vercel:
   - SITE_URL = <https://www.heartfeltlivingrenovations.com>
   - NEXT_PUBLIC_SITE_URL = <https://www.heartfeltlivingrenovations.com>
   - SENDGRID_API_KEY = `your-sendgrid-api-key`
   - EMAIL_TO = <crdavis39@heartfeltlivingrenovations.com>
   - EMAIL_FROM = <crdavis39@heartfeltlivingrenovations.com> (must be verified in SendGrid)
3. Deploy. After first deploy, add your custom domain in Project → Settings → Domains.
4. Update DNS at your registrar to point the apex and www to Vercel (it will give you the exact records).
5. Trigger a redeploy so `next-sitemap` generates sitemap/robots with your domain.
