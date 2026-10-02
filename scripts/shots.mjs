import { chromium } from "playwright";
const out = process.argv[2];
const base = "http://localhost:3123";
const pages = ["/", "/billboards-in-tanzania/", "/digital-billboards-tanzania/", "/work/kfc-countdown-to-iftar/", "/billboard-advertising-cost-tanzania/", "/plan-a-campaign/", "/contact/", "/insights/ooh-is-unskipable/"];
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || undefined });
for (const [name, vp] of [["mobile", { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true }], ["desktop", { width: 1440, height: 900 }]]) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: vp.deviceScaleFactor ?? 1, isMobile: vp.isMobile ?? false });
  const page = await ctx.newPage();
  for (const p of pages) {
    await page.goto(base + p, { waitUntil: "networkidle" });
    const file = `${out}/${name}${p === "/" ? "-home" : p.replace(/\//g, "-").replace(/-$/, "")}.png`;
    await page.screenshot({ path: file, fullPage: true });
    console.log(file);
  }
  await ctx.close();
}
await browser.close();
