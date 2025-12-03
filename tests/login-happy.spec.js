import { test, expect } from '@playwright/test';

test('Login - Happy Path', async ({ page }) => {
  await page.goto('https://test-automation.kartala.dev/login');

  await page.getByRole('textbox', { name: 'Email' }).fill('akuntester1@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://test-automation.kartala.dev/', { timeout: 5000 });
});