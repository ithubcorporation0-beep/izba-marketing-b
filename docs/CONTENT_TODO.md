# IZBA Marketing agency — Content Review & TODO Guide
**Location:** Mardan, Khyber Pakhtunkhwa, Pakistan  
**Brand System:** Navy (`#0B1F3A`) + Gold (`#C9A227`)  
**Single Content File:** [`src/content/services.ts`](file:///c:/Users/koko/Documents/IZba%20Marketing/src/content/services.ts)

This document lists every content field and commercial variable that the business owner should review, verify, or update. 

Per the project rules, **zero fake prices, invented discounts, or fabricated testimonials** have been placed in the code. Whenever a price or timeline field is set to `null`, the category page automatically displays:  
> **"Custom quote, tell us what you need"**

---

## 1. Summary of 9 Service Categories & Pages

The site now features 9 dedicated category pages at `/services/[category-slug]`:

| # | Category Name | Slug | Services Count | Status |
|---|---------------|------|:--------------:|:------:|
| 1 | Web & Software Development | `web-software-development` | 10 | Generated |
| 2 | Digital Marketing & SEO | `digital-marketing-seo` | 10 | Generated |
| 3 | AI Services & Automation | `ai-services-automation` | 10 | Generated |
| 4 | Graphic Design & Branding | `graphic-design-branding` | 10 | Generated |
| 5 | Data Entry & Virtual Assistance | `data-entry-virtual-assistance` | 10 | Generated |
| 6 | Digital Products & E-commerce | `digital-products-ecommerce` | 10 | Generated |
| 7 | Video & Content Production | `video-content-production` | 10 | Generated |
| 8 | IT Support & Business Solutions | `it-support-business-solutions` | 10 | Generated |
| 9 | Education & Office Services | `education-office-services` | 10 | Generated |

---

## 2. Items to Review & Confirm in `src/content/services.ts`

### Category 1: Web & Software Development (`web-software-development`)
- [ ] **Starting Price (`startingPricePkr`):** Currently `null`.  
  *Suggested placeholder to confirm:* `45000` (PKR) or keep `null` for custom quotes.
- [ ] **Typical Timeline (`typicalTimeline`):** Currently `null`.  
  *Suggested placeholder to confirm:* `"2 to 4 weeks"` or keep `null`.
- [ ] **Who it is for bullets:** Review target client descriptions in Mardan/KP.
- [ ] **FAQs:** Confirm answers regarding hosting and domain assistance.

### Category 2: Digital Marketing & SEO (`digital-marketing-seo`)
- [ ] **Starting Price (`startingPricePkr`):** Currently `null`.  
  *Suggested placeholder to confirm:* `30000` (PKR monthly retainer) or keep `null`.
- [ ] **Typical Timeline (`typicalTimeline`):** Currently `null`.  
  *Suggested placeholder to confirm:* `"Monthly retainer / 2 weeks initial setup"` or keep `null`.
- [ ] **Local SEO focus:** Review Google Business Profile references for Mardan & KP.

### Category 3: AI Services & Automation (`ai-services-automation`)
- [ ] **Starting Price (`startingPricePkr`):** Currently `null`.  
  *Suggested placeholder to confirm:* `50000` (PKR) or keep `null`.
- [ ] **Typical Timeline (`typicalTimeline`):** Currently `null`.  
  *Suggested placeholder to confirm:* `"1 to 3 weeks"` or keep `null`.
- [ ] **WhatsApp Bot API:** Confirm whether client WhatsApp numbers use Cloud API or Webhook connections.

### Category 4: Graphic Design & Branding (`graphic-design-branding`)
- [ ] **Starting Price (`startingPricePkr`):** Currently `null`.  
  *Suggested placeholder to confirm:* `15000` (PKR) or keep `null`.
- [ ] **Typical Timeline (`typicalTimeline`):** Currently `null`.  
  *Suggested placeholder to confirm:* `"3 to 7 business days"` or keep `null`.
- [ ] **Deliverable formats:** Confirm vector formats (AI, EPS, SVG, PDF) offered to print shops.

### Category 5: Data Entry & Virtual Assistance (`data-entry-virtual-assistance`)
- [ ] **Starting Price (`startingPricePkr`):** Currently `null`.  
  *Suggested placeholder to confirm:* `10000` (PKR) or keep `null`.
- [ ] **Typical Timeline (`typicalTimeline`):** Currently `null`.  
  *Suggested placeholder to confirm:* `"1 to 3 days per batch"` or keep `null`.
- [ ] **Sample Policy:** Review offer of small test sample before high-volume batch contracts.

### Category 6: Digital Products & E-commerce (`digital-products-ecommerce`)
- [ ] **Starting Price (`startingPricePkr`):** Currently `null`.  
  *Suggested placeholder to confirm:* `40000` (PKR) or keep `null`.
- [ ] **Typical Timeline (`typicalTimeline`):** Currently `null`.  
  *Suggested placeholder to confirm:* `"1 to 3 weeks"` or keep `null`.
- [ ] **Payment Gateways:** Confirm which domestic (Easypaisa, JazzCash, PayFast) and international gateways you support.

### Category 7: Video & Content Production (`video-content-production`)
- [ ] **Starting Price (`startingPricePkr`):** Currently `null`.  
  *Suggested placeholder to confirm:* `8000` (PKR per video) or keep `null`.
- [ ] **Typical Timeline (`typicalTimeline`):** Currently `null`.  
  *Suggested placeholder to confirm:* `"2 to 4 business days"` or keep `null`.
- [ ] **File transfer:** Review Google Drive / Dropbox upload instructions.

### Category 8: IT Support & Business Solutions (`it-support-business-solutions`)
- [ ] **Starting Price (`startingPricePkr`):** Currently `null`.  
  *Suggested placeholder to confirm:* `15000` (PKR) or keep `null`.
- [ ] **Typical Timeline (`typicalTimeline`):** Currently `null`.  
  *Suggested placeholder to confirm:* `"1 to 2 business days"` or keep `null`.
- [ ] **Tax & Regulatory Notice:** The FAQ explicitly notes that tax rules (FBR, KPRA) and corporate registrations change, and that IZBA Marketing agency advises on a case-by-case basis alongside certified professionals.

### Category 9: Education & Office Services (`education-office-services`)
- [ ] **Starting Price (`startingPricePkr`):** Currently `null`.  
  *Suggested placeholder to confirm:* `5000` (PKR) or keep `null`.
- [ ] **Typical Timeline (`typicalTimeline`):** Currently `null`.  
  *Suggested placeholder to confirm:* `"1 to 3 business days"` or keep `null`.
- [ ] **Translation languages:** Confirm English, Urdu, and Pashto human translation coverage.

---

## 3. Real Proof Items (Projects & Testimonials)

The Proof section on category pages is designed to automatically hide when no matching items exist in data, preventing fake content.

- **To add approved client case studies:**  
  Edit [`src/content/projects.ts`](file:///c:/Users/koko/Documents/IZba%20Marketing/src/content/projects.ts) and add client-permitted projects with `isPublished: true` and the matching `categorySlug`.
- **To add verified customer reviews:**  
  Edit [`src/content/testimonials.ts`](file:///c:/Users/koko/Documents/IZba%20Marketing/src/content/testimonials.ts) with genuine quotes and permissions.

---

## 4. Global Contact Information in `src/config/site.ts`

Review and replace the following placeholder values when ready:
- `contact.email`: Replace `PLACEHOLDER_EMAIL` with official business email (e.g., `info@ithubcorp.com`).
- `contact.phone`: Replace `PLACEHOLDER_PHONE` with official office phone number.
- `contact.whatsapp`: Replace `PLACEHOLDER_WHATSAPP` with official WhatsApp number (e.g., `+92 314 9140414`).
- `contact.address`: Replace `PLACEHOLDER_ADDRESS` with your physical office location in Mardan, KP.
- `contact.workingHours`: Replace `PLACEHOLDER_WORKING_HOURS` (e.g., `Monday - Saturday: 9:00 AM - 6:00 PM PKT`).
- `timezone`: Set to `'Asia/Karachi'` and `timezoneLabel` to `'PKT'`.

---

## 5. Web3Forms Online Form Submissions

The quote form at `/contact` is prepared for static form handling using Web3Forms:
- Obtain a free access key from [web3forms.com](https://web3forms.com).
- Add the key to `.env.local`:
  ```bash
  NEXT_PUBLIC_WEB3FORMS_KEY="your-access-key-here"
  ```
- Until the key is added, the contact form shows an accessible notice directing visitors to contact via email or WhatsApp directly.

---

## 6. How to Add a New Service or Category Later

### How to Add a Service to an Existing Category:
1. Open [`src/content/services.ts`](file:///c:/Users/koko/Documents/IZba%20Marketing/src/content/services.ts).
2. Locate the relevant category in `serviceCategories`.
3. Add a new service object to the `services` array:
   ```typescript
   {
     id: 'new-service-slug',
     name: 'New Service Name',
     slug: 'new-service-slug',
     outcomeDescription: '1 to 2 sentence outcome-focused explanation answering what the client gets and why it helps.',
     bestFor: 'Target client scenario.',
   },
   ```
4. Save the file. The category page will automatically:
   - Include the new service in the Quick Jump Table of Contents.
   - Render the new anchored block with `#new-service-slug`.
   - Update the service counter badge on homepage and overview cards automatically.

### How to Add a New 10th Category:
1. Open [`src/content/services.ts`](file:///c:/Users/koko/Documents/IZba%20Marketing/src/content/services.ts).
2. Append a new category object to `serviceCategories` matching the `CategoryDetail` type (with `id`, `name`, `slug`, `icon`, `oneSentencePromise`, `whoItIsFor`, `services`, `process`, `faqs`, etc.).
3. Save the file.
4. Run `npm run build`. Next.js static generation will automatically generate the new `/services/[new-slug]` landing page, include it in `sitemap.xml`, and display it in the overview grid.
