/**
 * Convert OG SVG images → JPG 1200×630
 *
 * Uses Playwright (already a devDependency) to render each SVG inside a
 * styled HTML canvas and captures a JPEG screenshot.
 *
 * Run: node scripts/convert-og-images.js
 */

import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const homeDir = process.env.HOME || "";
const chromiumPath = path.join(
  homeDir,
  ".cache/ms-playwright/chromium-1200/chrome-linux64/chrome"
);

process.env.PLAYWRIGHT_CHROMIUM_USE_HEADLESS_SHELL = "0";
const { chromium } = await import("playwright");

const OG_W = 1200;
const OG_H = 630;

const images = [
  {
    svg: "public/images/og-blog.svg",
    jpg: "public/images/og-blog.jpg",
    bg: "#0f1e32",
  },
  {
    svg: "public/images/og-gallery.svg",
    jpg: "public/images/og-gallery.jpg",
    bg: "#0f1e32",
  },
];

const browser = await chromium.launch({ executablePath: chromiumPath });
const page = await browser.newPage();
await page.setViewportSize({ width: OG_W, height: OG_H });

for (const { svg, jpg, bg } of images) {
  const svgPath = path.join(rootDir, svg);
  const jpgPath = path.join(rootDir, jpg);

  const svgContent = await readFile(svgPath, "utf-8");

  // Embed the SVG into a full-bleed HTML canvas at 1200×630.
  // The SVG is centred and scaled to fill the height (630px) while
  // preserving its aspect ratio. A brand-matched background fills the rest.
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: ${OG_W}px;
    height: ${OG_H}px;
    background: ${bg};
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .svg-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .svg-wrap svg {
    width: auto;
    height: ${OG_H}px;
    max-width: ${OG_W}px;
  }
</style>
</head>
<body>
  <div class="svg-wrap">${svgContent}</div>
</body>
</html>`;

  await page.setContent(html, { waitUntil: "load" });

  const buffer = await page.screenshot({
    type: "jpeg",
    quality: 90,
    clip: { x: 0, y: 0, width: OG_W, height: OG_H },
  });

  await writeFile(jpgPath, buffer);
  console.log(`✓ ${jpg}`);
}

await browser.close();
console.log("Done — og-blog.jpg and og-gallery.jpg generated at 1200×630.");
