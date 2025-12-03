import { test, expect } from '@playwright/test';

test('Register - Happy Path', async ({ page }) => {
  await page.goto('https://test-automation.kartala.dev/register');

  await page.getByRole('textbox', { name: 'Name' }).fill('Akbar');
  await page.getByRole('textbox', { name: 'Email' }).fill('akuntester1@gmail.com');
  await page.getByRole('textbox', { name: 'Phone' }).fill('08123456789');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page).toHaveURL('https://test-automation.kartala.dev/login', { timeout: 5000 });
});