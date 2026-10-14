# Beginner-Friendly Vercel Deployment Guide

## Step-by-Step Instructions for IZBA Marketing agency Website

This guide walks you through deploying your static Next.js website to **Vercel** from start to finish. You do not need any server management experience. Simply follow each numbered step in order.

---

### Step 1: Push Your Code to GitHub

1. Open your terminal or Git client in the project folder.
2. Ensure all changes are committed:
   ```bash
   git add -A
   git commit -m "chore: final QA, deployment guide and handover documentation"
   git tag v1.0.0
   ```
3. Push your branch and tags to your GitHub repository:
   ```bash
   git push origin main
   git push origin v1.0.0
   ```

---

### Step 2: Create a Vercel Account & Import the Project

1. Open your web browser and go to [https://vercel.com](https://vercel.com).
2. Click **Sign Up** (or **Log In**) using your GitHub account.
3. On your Vercel Dashboard, click the blue **Add New...** button in the top right corner.
4. Select **Project** from the dropdown menu.
5. Under "Import Git Repository", find your repository (e.g., `izba-marketing-website`) and click the **Import** button next to it.

---

### Step 3: Configure Project Build Settings

1. **Project Name:** Keep the default name or enter a clean name such as `izba-marketing-website`.
2. **Framework Preset:** Vercel automatically detects **Next.js**. Leave it set to Next.js.
3. **Root Directory:** Leave as `./` (the root).
4. **Build and Output Settings:** Leave default (`npm run build`). Next.js will automatically generate the static output in the `out` directory.

---

### Step 4: Add Environment Variables

Before clicking Deploy, expand the **Environment Variables** section on the Vercel setup screen. Add the following keys:

1. **`NEXT_PUBLIC_SITE_URL`**
   * **Value:** Your temporary or permanent website URL (e.g., `https://izba-marketing.vercel.app` or your final domain `https://izbamarketing.com`).
   * Click **Add**.

2. **`NEXT_PUBLIC_WEB3FORMS_KEY`**
   * **Value:** Your free access key from [https://web3forms.com](https://web3forms.com). (Enter your real key so enquiry emails are delivered to your inbox).
   * Click **Add**.

3. **`NEXT_PUBLIC_GA_ID`** *(Optional)*
   * **Value:** Your Google Analytics 4 Measurement ID (e.g., `G-XXXXXXXXXX`).
   * *Note:* If you do not have Google Analytics yet, leave this variable out. The website will load zero tracking scripts.

---

### Step 5: Click Deploy & Test the Live URL

1. Click the blue **Deploy** button.
2. Wait approximately 1–2 minutes while Vercel builds the 115 static pages.
3. When the build finishes, you will see a celebration screen with a screenshot of your live website.
4. Click on the preview image or the `*.vercel.app` URL to open your live website.
5. **Smoke Test:**
   * Click through the header navigation (About, Services, Portfolio, Contact).
   * Search for a service in `/services`.
   * Open the `/contact` page and submit a test enquiry to confirm email receipt.

---

### Step 6: Connect Your Custom Domain

1. In your Vercel project dashboard, click on the **Settings** tab at the top.
2. In the left sidebar, click **Domains**.
3. In the input field, enter your domain name (e.g., `izbamarketing.com`) and click **Add**.
4. Select the recommended option: add both `izbamarketing.com` and `www.izbamarketing.com` (with redirect).
5. Vercel will show the exact DNS records to add:
   * **Apex Domain (`izbamarketing.com`):**
     * Type: `A`
     * Name / Host: `@`
     * Value: `76.76.21.21`
   * **Subdomain (`www.izbamarketing.com`):**
     * Type: `CNAME`
     * Name / Host: `www`
     * Value: `cname.vercel-dns.com`
6. Log in to your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare, Google Domains) and add these two DNS records in your domain's DNS management panel.

---

### Step 7: Confirm HTTPS (SSL Certificate)

1. Return to the Vercel **Domains** page.
2. Vercel automatically checks DNS propagation and generates a free, auto-renewing SSL certificate via Let's Encrypt.
3. Once DNS propagation completes (usually 5 to 30 minutes), you will see green checkmarks next to your domain names.
4. Open `https://izbamarketing.com` in your browser and verify the secure padlock icon appears.

---

### Step 8: Update Production URL & Redeploy

1. Go to **Settings** > **Environment Variables** in Vercel.
2. Edit the **`NEXT_PUBLIC_SITE_URL`** variable:
   * Change its value to your official domain: `https://izbamarketing.com`
   * Click **Save**.
3. Go to the **Deployments** tab in Vercel.
4. Click the three dots (`...`) on the latest deployment and select **Redeploy**.
5. Once rebuilt, all canonical URLs, Open Graph tags, and the sitemap will point to your official domain.

---

### Step 9: Submit Your Sitemap in Google Search Console

1. Go to [https://search.google.com/search-console](https://search.google.com/search-console).
2. Add your domain property (`izbamarketing.com`) and verify ownership (using the DNS TXT record or HTML tag method).
3. In the left navigation menu, click **Sitemaps**.
4. Under "Add a new sitemap", enter:
   ```text
   sitemap.xml
   ```
5. Click **Submit**. Google will crawl all 107 public routes, categories, and services.

---

### Step 10: How to Roll Back to a Previous Deployment

If you ever introduce a breaking change or mistake in a future update:

1. Open your project on the Vercel Dashboard.
2. Click the **Deployments** tab.
3. Find the previous working deployment in the chronological list.
4. Click the three dots (`...`) on the right side of that deployment.
5. Select **Instant Rollback**.
6. Vercel will immediately route 100% of live traffic back to that working version in under 1 second without needing a new build.
