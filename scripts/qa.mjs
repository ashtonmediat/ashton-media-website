import { chromium } from "playwright";
const base = "http://localhost:3123";
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, deviceScaleFactor: 2 });
const page = await ctx.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });

await page.goto(base + "/", { waitUntil: "networkidle" });
await page.getByRole("button", { name: "Menu" }).click();
const dialogOpen = await page.locator("dialog[open]").count();
console.log("mobile menu opens:", dialogOpen === 1);
await page.getByRole("link", { name: "Airport" }).first().click();
await page.waitForURL("**/airport-advertising-tanzania/");
console.log("menu navigation works:", page.url().endsWith("/airport-advertising-tanzania/"));

// FAQ toggle
const faq = page.locator("details").first();
await faq.locator("summary").click();
console.log("faq opens:", await faq.evaluate((d) => d.open));

// Contact form end to end (no key -> ok)
await page.goto(base + "/contact/", { waitUntil: "networkidle" });
await page.fill("#name", "QA Test");
await page.fill("#email", "qa@example.com");
await page.fill("#message", "Automated test");
await page.getByRole("button", { name: "Send message" }).click();
await page.waitForURL("**/thank-you/**", { timeout: 15000 });
console.log("contact form -> thank-you:", page.url().includes("/thank-you/"));

// Brief form
await page.goto(base + "/plan-a-campaign/", { waitUntil: "networkidle" });
await page.check('input[name="cities"][value="Dar es Salaam"]');
await page.check('input[name="mediums"][value="Digital screens"]');
await page.fill("#name", "QA Test");
await page.fill("#phone", "+255700000000");
await page.check('input[name="consent"]');
await page.getByRole("button", { name: "Send the brief" }).click();
await page.waitForURL("**/thank-you/?type=brief**", { timeout: 15000 });
console.log("brief form -> thank-you:", page.url().includes("type=brief"));

// Keyboard: tab reaches the skip link first
await page.goto(base + "/", { waitUntil: "networkidle" });
await page.keyboard.press("Tab");
console.log("first tab focuses skip link:", await page.evaluate(() => document.activeElement?.textContent));

// Desktop nav
const d = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const dp = await d.newPage();
await dp.goto(base + "/", { waitUntil: "networkidle" });
const navHeight = await dp.locator("header").evaluate((h) => h.getBoundingClientRect().height);
console.log("desktop header height (expect < 100):", navHeight);
console.log("errors:", errors.length ? errors : "none");
await browser.close();
