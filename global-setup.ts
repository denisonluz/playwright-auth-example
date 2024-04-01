import { expect, Browser, chromium, Page } from "@playwright/test";

async function globalSetup() {
    const browser: Browser = await chromium.launch({ headless: false});
    const context = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('test');
    await page.locator('#loginusername').press('Tab');
    await page.locator('#loginpassword').fill('test');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

    // Save the state of the webpage - means we are logged in
    await page.context().storageState({ path: "./login-auth.json" });

    await browser.close();
}

export default globalSetup;