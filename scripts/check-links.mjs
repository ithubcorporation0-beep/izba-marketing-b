import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, '..', 'out');

if (!fs.existsSync(outDir)) {
  console.error(`❌ Output directory does not exist: ${outDir}`);
  console.error(
    'Please run "npm run build" first to generate the static export.'
  );
  process.exit(1);
}

console.log(
  `🔍 Scanning static export directory for broken internal links: ${outDir}\n`
);

// Recursively collect all .html files in outDir
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(outDir);
console.log(`Found ${htmlFiles.length} HTML files to inspect.`);

// Helper to check if an internal href target exists in outDir or public
function targetExists(cleanPath) {
  if (cleanPath === '' || cleanPath === '/') {
    return fs.existsSync(path.join(outDir, 'index.html'));
  }

  // Remove leading slash
  const relative = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath;

  // Try direct file path (e.g. out/robots.txt, out/sitemap.xml)
  if (fs.existsSync(path.join(outDir, relative))) {
    return true;
  }

  // Try .html (e.g. out/about.html)
  if (fs.existsSync(path.join(outDir, `${relative}.html`))) {
    return true;
  }

  // Try directory index.html (e.g. out/about/index.html)
  if (fs.existsSync(path.join(outDir, relative, 'index.html'))) {
    return true;
  }

  // Try public directory fallback
  const publicDir = path.resolve(__dirname, '..', 'public');
  if (fs.existsSync(path.join(publicDir, relative))) {
    return true;
  }

  return false;
}

const brokenLinks = [];
let totalLinksChecked = 0;

// Regex to extract href attributes
const hrefRegex = /href=["']([^"']+)["']/g;

for (const filePath of htmlFiles) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativeFile = path.relative(outDir, filePath);
  let match;

  while ((match = hrefRegex.exec(content)) !== null) {
    const rawHref = match[1];

    // Skip external links, mailto, tel, javascript, and anchor-only links
    if (
      rawHref.startsWith('http://') ||
      rawHref.startsWith('https://') ||
      rawHref.startsWith('mailto:') ||
      rawHref.startsWith('tel:') ||
      rawHref.startsWith('javascript:') ||
      rawHref.startsWith('#') ||
      rawHref.startsWith('data:')
    ) {
      continue;
    }

    totalLinksChecked++;

    // Clean URL: strip query parameters and anchor fragments
    const cleanPath = rawHref.split('?')[0].split('#')[0];

    if (!targetExists(cleanPath)) {
      brokenLinks.push({
        sourceFile: relativeFile,
        href: rawHref,
        cleanPath,
      });
    }
  }
}

console.log(
  `Verified ${totalLinksChecked} internal links across ${htmlFiles.length} pages.`
);

if (brokenLinks.length > 0) {
  console.error(`\n❌ Found ${brokenLinks.length} broken internal link(s):`);
  for (const b of brokenLinks) {
    console.error(
      `  • In "${b.sourceFile}": href="${b.href}" -> target not found ("${b.cleanPath}")`
    );
  }
  process.exit(1);
} else {
  console.log(
    `\n✅ All internal links are VALID! Zero broken targets detected.`
  );
  process.exit(0);
}
