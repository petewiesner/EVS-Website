// Generates favicon + PWA icons from src/assets/Bulb.svg.
// Run: node scripts/generate-icons.mjs
import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const BLUE = "#0073cc"
const bulbSrc = readFileSync(new URL("../src/assets/Bulb.svg", import.meta.url), "utf8")
const bulbPath = bulbSrc.match(/<path[^>]*d="([^"]+)"/s)[1]

// Bulb (81.7 x 121.3) centred on a blue tile. `scale` = bulb height as share of tile.
function iconSvg({ size = 512, radius = 112, scale = 0.7 } = {}) {
  const h = size * scale
  const w = h * (81.7 / 121.3)
  const x = (size - w) / 2
  const y = (size - h) / 2
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${radius}" fill="${BLUE}"/>
  <svg x="${x}" y="${y}" width="${w}" height="${h}" viewBox="0 0 81.7 121.3">
    <path fill="#FFCB05" d="${bulbPath}"/>
  </svg>
</svg>`
}

const out = (f) => fileURLToPath(new URL(`../public/${f}`, import.meta.url))
const rounded = iconSvg()
const maskable = iconSvg({ radius: 0, scale: 0.55 }) // keep inside the safe zone
const appleTouch = iconSvg({ radius: 0, scale: 0.65 }) // iOS rounds corners itself

writeFileSync(out("favicon.svg"), rounded)

const jobs = [
  [rounded, 32, "favicon-32.png"],
  [rounded, 192, "icon-192.png"],
  [rounded, 512, "icon-512.png"],
  [maskable, 512, "icon-maskable-512.png"],
  [appleTouch, 180, "apple-touch-icon.png"],
]
for (const [svg, size, name] of jobs) {
  await sharp(Buffer.from(svg), { density: 300 }).resize(size, size).png().toFile(out(name))
  console.log("wrote", name)
}

// Social share image (1200x630): full logo on white.
const logo = readFileSync(new URL("../src/assets/Logo.svg", import.meta.url))
const logoPng = await sharp(logo, { density: 400 }).resize({ width: 760 }).png().toBuffer()
await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#ffffff" } })
  .composite([{ input: logoPng, gravity: "center" }])
  .png()
  .toFile(out("og-image.png"))
console.log("wrote og-image.png")
