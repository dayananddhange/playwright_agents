import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('SauceDemo Login', () => {
  test('TC-LOGIN-004 Submit login with username populated and password empty', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Open https://www.saucedemo.com/ in a fresh browser state.
    await loginPage.open();
    await loginPage.expectLoaded();

    // 2. Enter standard_user in Username, leave Password empty, and click Login.
    await loginPage.username.fill('standard_user');
    await expect(loginPage.password).toHaveValue('');
    await loginPage.loginButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Password is required');
    await expect(page).not.toHaveURL(/inventory\.html/);
  });
});
