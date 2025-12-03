import { test, expect } from '@playwright/test';

test('Login - Happy Path', async ({ page }) => {
  await page.goto('https://test-automation.kartala.dev/login');

  await page.getByRole('textbox', { name: 'Email' }).fill('emailsalah@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('654321');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://test-automation.kartala.dev/login', { timeout: 5000 });
  await expect(page.getByText('Invalid email or password')).toBeVisible();
});