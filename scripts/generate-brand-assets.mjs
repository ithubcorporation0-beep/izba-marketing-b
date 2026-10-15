import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const iconsDir = path.resolve('public/icons');
const imagesDir = path.resolve('public/images');

if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });

async function generateBrandAssets() {
  console.log('Generating official IZBA Marketing Agency brand assets with Sharp...');

  const inputPath = path.join(imagesDir, 'logo-original.jpg');
  if (!fs.existsSync(inputPath)) {
    throw new Error('Missing public/images/logo-original.jpg');
  }

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // The outer circle diameter is ~733px, center is at (511.5, 521.5).
  // Radius of outer gold border is ~368.5px.
  const size = 800;
  const cx = 511.5;
  const cy = 521.5;
  const radius = 368.5;

  const outBuf = Buffer.alloc(size * size * 4);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const origX = Math.round(cx - size / 2 + x);
      const origY = Math.round(cy - size / 2 + y);
      const outIdx = (y * size + x) * 4;

      if (origX < 0 || origX >= w || origY < 0 || origY >= h) {
        continue;
      }

      const inIdx = (origY * w + origX) * 3;
      const r = data[inIdx];
      const g = data[inIdx + 1];
      const b = data[inIdx + 2];

      const dx = x - size / 2;
      const dy = y - size / 2;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist <= radius - 1.5) {
        outBuf[outIdx] = r;
        outBuf[outIdx + 1] = g;
        outBuf[outIdx + 2] = b;
        outBuf[outIdx + 3] = 255;
      } else if (dist <= radius + 1.5) {
        const alpha = Math.max(0, Math.min(1, (radius + 1.5 - dist) / 3.0));
        outBuf[outIdx] = r;
        outBuf[outIdx + 1] = g;
        outBuf[outIdx + 2] = b;
        outBuf[outIdx + 3] = Math.round(alpha * 255);
      }
    }
  }

  const masterCircle = sharp(outBuf, { raw: { width: size, height: size, channels: 4 } });

  // 1. High-resolution transparent PNG emblem
  await masterCircle.clone().png().toFile(path.join(publicDir, 'logo.png'));
  await masterCircle.clone().png().toFile(path.join(imagesDir, 'logo-circle.png'));
  console.log('Created public/logo.png and public/images/logo-circle.png');

  // 2. Square version with original background
  await sharp(inputPath).png().toFile(path.join(imagesDir, 'logo-square.png'));
  console.log('Created public/images/logo-square.png');

  // 3. App and Device Icons
  await masterCircle.clone().resize(512, 512).png().toFile(path.join(iconsDir, 'icon-512.png'));
  await masterCircle.clone().resize(192, 192).png().toFile(path.join(iconsDir, 'icon-192.png'));
  await masterCircle.clone().resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  await masterCircle.clone().resize(48, 48).png().toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Created app icons (512, 192, 180, 48)');

  // 4. Base64 strings for embedded SVGs
  const b64_240 = (await masterCircle.clone().resize(240, 240).png().toBuffer()).toString('base64');
  const b64_120 = (await masterCircle.clone().resize(120, 120).png().toBuffer()).toString('base64');

  // 5. Standalone icon SVGs
  const iconSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <image href="data:image/png;base64,${b64_120}" x="0" y="0" width="100" height="100" />
</svg>
`;
  fs.writeFileSync(path.join(publicDir, 'logo-icon.svg'), iconSvgContent);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), iconSvgContent);
  fs.writeFileSync(path.join(iconsDir, 'favicon.svg'), iconSvgContent);
  console.log('Created logo-icon.svg and favicon.svg');

  // 6. Primary logo.svg (Dark Navy text for light navbar / backgrounds)
  const logoSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <!-- Official IZBA Gold Circle Emblem -->
  <image href="data:image/png;base64,${b64_240}" x="6" y="6" width="68" height="68" />
  
  <!-- Brand Name in Dark Navy and Marketing Agency in Gold -->
  <text x="86" y="45" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="29" fill="#0B1F3A" letter-spacing="-0.5">IZBA</text>
  <text x="87" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="11" fill="#C9A227" letter-spacing="3.2">MARKETING AGENCY</text>
</svg>
`;
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), logoSvgContent);
  console.log('Created public/logo.svg');

  // 7. Light logo.svg (White text for dark navbar / footer)
  const logoLightSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <!-- Official IZBA Gold Circle Emblem -->
  <image href="data:image/png;base64,${b64_240}" x="6" y="6" width="68" height="68" />
  
  <!-- Brand Name in White and Marketing Agency in Gleaming Gold -->
  <text x="86" y="45" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="29" fill="#FFFFFF" letter-spacing="-0.5">IZBA</text>
  <text x="87" y="62" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="11" fill="#E6C65C" letter-spacing="3.2">MARKETING AGENCY</text>
</svg>
`;
  fs.writeFileSync(path.join(publicDir, 'logo-light.svg'), logoLightSvgContent);
  console.log('Created public/logo-light.svg');

  // 8. OpenGraph Social Share Image (1200x630)
  const ogSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
      <!-- Deep Corporate Navy Background -->
      <rect width="1200" height="630" fill="#071427" />
      <radialGradient id="radialGlow" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#C9A227" stop-opacity="0.16" />
        <stop offset="50%" stop-color="#0B1F3A" stop-opacity="0.85" />
        <stop offset="100%" stop-color="#071427" stop-opacity="1" />
      </radialGradient>
      <rect width="1200" height="630" fill="url(#radialGlow)" />
      
      <!-- Subtle Gold Border Frame -->
      <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="#C9A227" stroke-width="2" stroke-opacity="0.3" />
      
      <!-- Official Emblem on Right Side -->
      <image href="data:image/png;base64,${b64_240}" x="780" y="155" width="320" height="320" />
      
      <!-- Top Badge -->
      <g transform="translate(100, 100)">
        <rect width="280" height="40" rx="20" fill="#FBF5E1" stroke="#C9A227" stroke-width="1.5" />
        <text x="140" y="25" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="13" fill="#0B1F3A" text-anchor="middle" letter-spacing="2">IZBA MARKETING AGENCY</text>
      </g>
      
      <!-- Main Brand Headline -->
      <text x="100" y="250" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="64" fill="#FFFFFF" letter-spacing="-1.5">IZBA MARKETING</text>
      <text x="100" y="320" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="34" fill="#E6C65C" letter-spacing="1">Technology, Marketing &amp; AI Solutions</text>
      
      <!-- Supporting Description -->
      <text x="100" y="400" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="22" fill="#94A3B8">Corporate Digital Services &amp; Growth Infrastructure</text>
      
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
    </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile(path.join(imagesDir, 'og-image.png'));
  console.log('Created images/og-image.png (1200x630)');

  console.log('All brand assets built successfully!');
}

generateBrandAssets().catch((err) => {
  console.error(err);
  process.exit(1);
});
