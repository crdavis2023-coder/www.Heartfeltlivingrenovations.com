# Heartfelt Living Renovations — Next.js Site

## Quick start
```bash
npm install
cp .env.example .env.local
# fill in SENDGRID keys
npm run dev
```

## Deploy to Vercel
1. Create a new project on https://vercel.com and import this repo (or upload zip).
2. Set Environment Variables in Vercel:
   - SITE_URL = https://heartfelthomerenovations.com
   - NEXT_PUBLIC_SITE_URL = https://heartfelthomerenovations.com
   - SENDGRID_API_KEY = <your key>
   - EMAIL_TO = daviscr803@gmail.com
   - EMAIL_FROM = daviscr803@gmail.com (must be verified in SendGrid)
3. Deploy. After first deploy, add your custom domain in Project → Settings → Domains.
4. Update DNS at your registrar to point the apex and www to Vercel (it will give you the exact records).
5. Trigger a redeploy so `next-sitemap` generates sitemap/robots with your domain.
