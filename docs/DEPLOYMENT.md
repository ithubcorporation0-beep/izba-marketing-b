# Deployment & Hosting Guide

## IT HUB Corporation Digital Flagship

This document outlines deployment pipelines, production builds, and hosting recommendations for the IT HUB Corporation platform.

---

### 1. Prerequisites

- **Node.js:** v20.x, v22.x, or v24.x LTS recommended
- **Package Manager:** `npm` (v10+), `pnpm`, or `yarn`

---

### 2. Local Development & Verification

```bash
# Install dependencies
npm install

# Start local development server with Hot Module Reloading
npm run dev

# Run TypeScript compilation and build validation
npm run build

# Start production server locally for staging test
npm run start
```

---

### 3. Recommended Hosting Platforms

#### Option A: Vercel (Recommended)

Next.js is developed by Vercel and offers native zero-configuration deployments:

1. Connect the GitHub / GitLab repository to Vercel.
2. Framework Preset: Automatically detected as **Next.js**.
3. Build Command: `npm run build`
4. Output Directory: `.next`
5. Configure Environment Variables in the Vercel Project Dashboard (refer to `.env.example`).
6. Custom Domain: Configure DNS records (CNAME / A records) for `ithub-corp.com` and `www.ithub-corp.com`.

#### Option B: Docker / Containerized Cloud (AWS ECS, Google Cloud Run, Azure Container Apps)

A standardized multi-stage Dockerfile can be used:

```dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "run", "start"]
```

#### Option C: Self-Hosted Linux VPS / Nginx Reverse Proxy

1. Install Node.js LTS and PM2:
   ```bash
   npm install -g pm2
   ```
2. Build the application:
   ```bash
   npm run build
   ```
3. Start with PM2 process manager:
   ```bash
   pm2 start npm --name "ithub-corp" -- run start -- -p 3000
   pm2 save
   pm2 startup
   ```
4. Configure Nginx reverse proxy to forward traffic on port 80/443 to `http://127.0.0.1:3000`.

---

### 4. Environment Variables

| Variable                   | Description                              | Default / Example           |
| :------------------------- | :--------------------------------------- | :-------------------------- |
| `NEXT_PUBLIC_SITE_URL`     | Canonical public website URL             | `https://ithub-corp.com`    |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional Google Analytics / Plausible ID | `G-XXXXXXXXXX`              |
| `CONTACT_RECIPIENT_EMAIL`  | Inbox receiving inbound quote requests   | `enterprise@ithub-corp.com` |
| `SMTP_HOST`                | Outbound mailer host (if using SMTP)     | `smtp.resend.com`           |
| `SMTP_PORT`                | SMTP port                                | `587`                       |
| `SMTP_USER`                | SMTP username / API key                  | `api_key`                   |
| `SMTP_PASS`                | SMTP secret token                        | `••••••••`                  |

---

### 5. Production Health Checks & CI/CD Pipeline

- **Continuous Integration:** Ensure `npm run build` passes before merging pull requests.
- **Cache Strategy:** Static assets in `/public` and Next.js immutable bundles (`/_next/static/*`) are cached with `Cache-Control: public, max-age=31536000, immutable`.
- **Sitemap & Robots:** Auto-generated at `/sitemap.xml` and `/robots.txt` upon build.
