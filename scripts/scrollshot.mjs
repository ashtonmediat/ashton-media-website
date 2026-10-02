import { chromium } from "playwright";
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM });
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await page.goto("http://localhost:3123/", { waitUntil: "networkidle" });
await page.locator("#work-heading").scrollIntoViewIfNeeded();
await page.waitForTimeout(1500);
await page.screenshot({ path: process.argv[2] });
await browser.close();
