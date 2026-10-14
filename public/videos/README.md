# Hero Video Specifications & Implementation Guide

Place the client-provided background video files in this directory (`public/videos/`).

## File Requirements
- **Duration:** 5–10 seconds (seamless loop)
- **Audio:** Audio track must be stripped/muted
- **Resolution:** 1920x1080 (Full HD) or 1280x720 (HD)
- **Formats:**
  - `hero-ambient.mp4` (H.264 / AAC or muted)
  - `hero-ambient.webm` (VP9 / WebM for optimized modern browsers)
- **Max File Size:** Under 3 MB (recommended: 1.5 – 2.5 MB)
- **Compression tip:** Use Handbrake or ffmpeg:
  ```bash
  ffmpeg -i input.mov -vcodec libx264 -crf 28 -an -movflags +faststart hero-ambient.mp4
  ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 0 -crf 35 -an hero-ambient.webm
  ```

## Poster Image Requirement
- Place a matching first-frame WebP screenshot at `public/images/hero-poster.webp`.

## How to Activate in Code
1. Place `hero-ambient.mp4` and `hero-ambient.webm` in `public/videos/`.
2. Place `hero-poster.webp` in `public/images/`.
3. In `src/components/sections/Hero.tsx`, uncomment the `<video>` element inside the hero markup.
4. The video is already pre-configured with `autoPlay`, `muted`, `loop`, `playsInline`, `aria-hidden="true"`, and automatic suppression for users with `prefers-reduced-motion` or `prefers-reduced-data`.
