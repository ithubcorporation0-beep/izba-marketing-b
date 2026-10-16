# IZBA Marketing Agency — Image & Media Style Guide

This document defines the visual asset standards, image locations, file formats, dimension guidelines, and replacement procedures for IZBA Marketing agency's digital platform.

---

## 1. Photo Locations & Permitted Usage

All static media assets are hosted in `/public/images/`.

| Section | Current File Path | Dimensions | Target Aspect Ratio | Format & Size Limit | Purpose & Replacement Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Showcase** | `/public/images/hero-studio-showcase.webp` | 1440 × 810 px | 16:9 widescreen | WebP < 200 KB | **Hero photo stays.** High-end modern creative studio workspace. Free editorial commercial license confirmed (Unsplash License). |
| **Leadership / CEO** | `/public/images/ceo-founder.jpg` | 768 × 1024 px | 3:4 portrait | WebP/JPG < 120 KB | Verified executive portrait of Ibrar Khan, CEO & Founder of IZBA. |
| **Team Profiles** | `/public/images/team/[slug].webp` | 800 × 1000 px | 4:5 portrait | WebP < 100 KB | Real staff headshots with clean, dark or neutral corporate background. |
| **Case Studies** | `/public/images/portfolio/[slug]-cover.webp` | 1600 × 1000 px | 16:10 landscape | WebP < 150 KB | Real project deliverables, verified client UI screenshots, or design systems. |
| **Digital Products** | `/public/images/products/[slug].webp` | 1200 × 800 px | 3:2 landscape | WebP < 120 KB | High-fidelity product bundles, templates, or software mockup previews. |
| **Open Graph (Social)** | `/public/images/og-image.png` | 1200 × 630 px | 1.91:1 | PNG < 180 KB | Social sharing card with IZBA logo, gold accent, and core service pillars. |

---

## 2. Hero Photo License & Attribution Note

- **Image File:** `/public/images/hero-studio-showcase.webp` (fallback: `/public/images/hero-studio-showcase.jpg`)
- **Visual Description:** Modern architectural studio interior with warm ambient illumination and collaborative workstations.
- **License Status:** Permitted for unrestricted worldwide commercial use, royalty-free, under standard Unsplash open media licensing.
- **Retention Directive:** Per client request, this hero photo is preserved as the signature atmospheric visual anchor for the flagship homepage.

---

## 3. Strict Quality & Compression Standards

To maintain Lighthouse Mobile Performance 90+ and ensure instantaneous global CDN delivery:

1. **Modern Formats Only:**
   - Primary: **WebP** (`.webp`) with quality set between 80–84%.
   - Next-Gen fallback: **AVIF** (`.avif`) where supported.
   - For icons and logos: Pure vector **SVG** (`.svg`). Never use raster formats for logos.

2. **File Size Ceilings:**
   - Full-bleed hero images: Maximum **200 KB** (target < 150 KB).
   - Standard content photos & cards: Maximum **100 KB** (target < 75 KB).
   - Thumbnails & avatars: Maximum **40 KB** (target < 25 KB).

3. **Compression Workflow:**
   - Use `sharp`, `squoosh.app`, or CLI tools:
     ```bash
     cwebp -q 82 input.png -o output.webp
     ```
   - Strip all EXIF metadata before committing files into `/public/images/`.

---

## 4. Next.js Image Component Implementation Rules

Every image rendered in JSX must conform to Next.js static best practices:

```tsx
import Image from 'next/image';

<Image
  src="/images/portfolio/project-cover.webp"
  alt="Concrete, descriptive explanation of what the image shows"
  width={1200}
  height={750}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="your-module-style"
/>
```

- **Explicit Dimensions:** Always define literal integer `width` and `height` to prevent Cumulative Layout Shift (CLS = 0.000).
- **Lazy Loading:** All images below the fold must specify `loading="lazy"`. Only the primary hero image may use `priority`.
- **Descriptive Alt Text:**
  - Good: `alt="Ibrar Khan - CEO and Founder of IZBA marketing agency"`
  - Good: `alt="SaaS analytics dashboard interface design featuring dark mode metrics"`
  - Forbidden: `alt="image"`, `alt="photo"`, `alt="stock"`.
  - Purely decorative elements must be marked with `aria-hidden="true"`.

---

## 5. Elegant Image Placeholders (`ImagePlaceholder.tsx`)

In accordance with agency standards, **never insert generic, cheesy stock photos** for unverified client projects. Instead, use the custom `ImagePlaceholder` component:

```tsx
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

<ImagePlaceholder
  label="Client Case Study Cover"
  recommendedSize="1600 × 1000 px (WebP < 150KB)"
  aspectRatio="16/10"
  variant="navy"
/>
```

This renders a tailored corporate blueprint frame featuring subtle architectural gridlines, gold accents, and exact file specifications, indicating where client media will be inserted once project sign-off is completed.
