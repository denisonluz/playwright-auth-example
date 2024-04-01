import { expect, test } from "@playwright/test";

test("Basic Test 1", async({page}) => {
    await page.goto('https://demoblaze.com/');
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
})

