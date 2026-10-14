import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const iconsDir = path.resolve('public/icons');
const imagesDir = path.resolve('public/images');

if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

const iconSvg = fs.readFileSync(path.join(publicDir, 'logo-icon.svg'));
const logoSvg = fs.readFileSync(path.join(publicDir, 'logo.svg'));

async function generateAssets() {
  console.log('Generating brand PNG assets with Sharp...');

  // 1. Apple Touch Icon (180x180)
  await sharp(iconSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png (180x180)');

  // 2. Icon 192 (192x192)
  await sharp(iconSvg)
    .resize(192, 192)
    .png()
    .toFile(path.join(iconsDir, 'icon-192.png'));
  console.log('Created icons/icon-192.png');

  // 3. Icon 512 (512x512)
  await sharp(iconSvg)
    .resize(512, 512)
    .png()
    .toFile(path.join(iconsDir, 'icon-512.png'));
  console.log('Created icons/icon-512.png');

  // 4. Logo PNG (640x160)
  await sharp(logoSvg)
    .resize(640, 160)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));
  console.log('Created public/logo.png');

  // 5. Social Share Image (og:image.png) 1200x630 with Dark Navy background, Gold watermark mark, and gold badge
  const ogSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
      <!-- Deep Corporate Navy Background -->
      <rect width="1200" height="630" fill="#071427" />
      <radialGradient id="radialGlow" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#C9A227" stop-opacity="0.14" />
        <stop offset="50%" stop-color="#0B1F3A" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#071427" stop-opacity="1" />
      </radialGradient>
      <rect width="1200" height="630" fill="url(#radialGlow)" />
      
      <!-- Subtle Gold Border Frame -->
      <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="#C9A227" stroke-width="2" stroke-opacity="0.3" />
      
      <!-- Giant Faded Background Logo Mark Watermark -->
      <g transform="translate(760, 140) scale(4.2)" opacity="0.06">
        <rect width="100" height="100" rx="26" fill="#C9A227" />
        <text x="50" y="66" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="46" fill="#0B1F3A" text-anchor="middle">IZ</text>
      </g>
      
      <!-- Top Badge -->
      <g transform="translate(100, 100)">
        <rect width="280" height="40" rx="20" fill="#FBF5E1" stroke="#C9A227" stroke-width="1.5" />
        <text x="140" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="13" fill="#0B1F3A" text-anchor="middle" letter-spacing="2">IT HUB CORPORATION</text>
      </g>
      
      <!-- Main Brand Headline -->
      <text x="100" y="250" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="64" fill="#FFFFFF" letter-spacing="-1.5">IZBA MARKETING</text>
      <text x="100" y="320" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="34" fill="#E6C65C" letter-spacing="1">Technology, Marketing &amp; AI Solutions</text>
      
      <!-- Supporting Description -->
      <text x="100" y="400" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="22" fill="#94A3B8">Corporate Digital Services &amp; Automated Growth Infrastructure</text>
      
      <!-- Service Pillars Chips -->
      <g transform="translate(100, 470)">
        <rect width="180" height="38" rx="8" fill="#16304F" stroke="#C9A227" stroke-opacity="0.4" stroke-width="1" />
        <text x="90" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#E6C65C" text-anchor="middle">Web &amp; Software</text>
      </g>
      <g transform="translate(300, 470)">
        <rect width="190" height="38" rx="8" fill="#16304F" stroke="#C9A227" stroke-opacity="0.4" stroke-width="1" />
        <text x="95" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#E6C65C" text-anchor="middle">Digital Marketing</text>
      </g>
      <g transform="translate(510, 470)">
        <rect width="180" height="38" rx="8" fill="#16304F" stroke="#C9A227" stroke-opacity="0.4" stroke-width="1" />
        <text x="90" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#E6C65C" text-anchor="middle">AI Automation</text>
      </g>
      <g transform="translate(710, 470)">
        <rect width="180" height="38" rx="8" fill="#16304F" stroke="#C9A227" stroke-opacity="0.4" stroke-width="1" />
        <text x="90" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="600" font-size="14" fill="#E6C65C" text-anchor="middle">Brand Identity</text>
      </g>
    </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png()
    .toFile(path.join(imagesDir, 'og-image.png'));
  console.log('Created images/og-image.png (1200x630)');

  console.log('All brand assets successfully generated!');
}

generateAssets().catch((err) => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});
