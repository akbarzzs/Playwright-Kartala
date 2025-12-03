import { test, expect } from '@playwright/test';

test('Register - Negative Path', async ({ page }) => {
  await page.goto('https://test-automation.kartala.dev/register');

  await page.getByRole('textbox', { name: 'Name' }).fill('A');
  await page.getByRole('textbox', { name: 'Email' }).fill('akuntester2@gmail.com');
  await page.getByRole('textbox', { name: 'Phone' }).fill('08123456789');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page).toHaveURL('https://test-automation.kartala.dev/register', { timeout: 5000 });
  await expect(page.getByText('Name must be at least 2')).toBeVisible();
});