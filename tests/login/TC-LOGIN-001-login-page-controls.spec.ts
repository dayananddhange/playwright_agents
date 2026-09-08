import { test, expect } from '@playwright/test';
import loginTestData from '../../testData/login_testcase.json';
import { LoginPage } from '../pages/login.page';

type LoginTestData = {
  testcase: string;
  username: string;
  password: string;
};

const successfulLogin = (loginTestData as LoginTestData[]).find(
  (data) => data.testcase === 'Successful login',
);

if (!successfulLogin) {
  throw new Error('Successful login test data is missing.');
}

test.describe('SauceDemo Login', () => {
  test('TC-LOGIN-001 Verify login page controls and labels', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Open https://www.saucedemo.com/.
    await loginPage.open();
    await loginPage.expectLoaded();
    await expect(loginPage.username).toHaveValue('');
    await expect(loginPage.password).toHaveValue('');
    await expect(loginPage.password).toHaveAttribute('type', 'password');

    // 2. Enter any sample value in the Password field.
    await loginPage.password.fill(successfulLogin.password);
    await expect(loginPage.password).toHaveValue(successfulLogin.password);
    await expect(loginPage.password).toHaveAttribute('type', 'password');
  });
});
