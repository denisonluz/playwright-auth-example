import { expect, test } from "@playwright/test";

test("Basic Test 2", async({page}) => {
    await page.goto('https://demoblaze.com/');
    await expect(page.getByRole('link', { name: 'Welcome test' })).toBeVisible();
})