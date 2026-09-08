# SauceDemo Login Test Cases - Excel Format

## Application Overview

Login-only functional test plan for https://www.saucedemo.com/. The cases are independent and use a fresh browser state. The documented test data is standard_user / secret_sauce for a successful login, locked_out_user / secret_sauce for the locked-account scenario, and intentionally invalid values for negative cases. The generated markdown is structured as a spreadsheet-friendly test-case register; each test case contains ID-equivalent title, precondition, numbered actions, and expected results.

## Test Scenarios

### 1. SauceDemo Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. TC-LOGIN-001 Verify login page controls and labels

**File:** `tests/login/TC-LOGIN-001-login-page-controls.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/.
    - expect: Page title is Swag Labs.
    - expect: Username field, Password field, and Login button are displayed.
    - expect: Username and Password fields are empty.
    - expect: Password input masks entered characters.
  2. Enter any sample value in the Password field.
    - expect: Entered password characters are obscured.

#### 1.2. TC-LOGIN-002 Submit login with both fields empty

**File:** `tests/login/TC-LOGIN-002-empty-login.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser state.
    - expect: Login page is displayed.
  2. Leave Username and Password empty and click Login.
    - expect: User remains on the login page.
    - expect: Error message displays: Epic sadface: Username is required.
    - expect: No inventory page is opened.

#### 1.3. TC-LOGIN-003 Submit login with username empty and password populated

**File:** `tests/login/TC-LOGIN-003-missing-username.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser state.
    - expect: Login page is displayed.
  2. Leave Username empty, enter secret_sauce in Password, and click Login.
    - expect: User remains on the login page.
    - expect: Error message displays: Epic sadface: Username is required.
    - expect: No authenticated session is created.

#### 1.4. TC-LOGIN-004 Submit login with username populated and password empty

**File:** `tests/login/TC-LOGIN-004-missing-password.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser state.
    - expect: Login page is displayed.
  2. Enter standard_user in Username, leave Password empty, and click Login.
    - expect: User remains on the login page.
    - expect: Error message displays: Epic sadface: Password is required.
    - expect: No inventory page is opened.

#### 1.5. TC-LOGIN-005 Login with valid standard user credentials

**File:** `tests/login/TC-LOGIN-005-valid-login.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser state.
    - expect: Login page is displayed.
  2. Enter standard_user in Username and secret_sauce in Password.
    - expect: Entered values are accepted and password remains masked.
  3. Click Login.
    - expect: User is authenticated successfully.
    - expect: Browser navigates to https://www.saucedemo.com/inventory.html.
    - expect: Products page is displayed.
    - expect: No login error is shown.

#### 1.6. TC-LOGIN-006 Login with invalid username and valid password

**File:** `tests/login/TC-LOGIN-006-invalid-username.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser state.
    - expect: Login page is displayed.
  2. Enter invalid_user in Username and secret_sauce in Password, then click Login.
    - expect: User remains on the login page.
    - expect: Error message displays: Epic sadface: Username and password do not match any user in this service.
    - expect: No inventory page is opened.

#### 1.7. TC-LOGIN-007 Login with valid username and invalid password

**File:** `tests/login/TC-LOGIN-007-invalid-password.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser state.
    - expect: Login page is displayed.
  2. Enter standard_user in Username and wrong_password in Password, then click Login.
    - expect: User remains on the login page.
    - expect: Error message displays: Epic sadface: Username and password do not match any user in this service.
    - expect: No inventory page is opened.

#### 1.8. TC-LOGIN-008 Login with invalid username and invalid password

**File:** `tests/login/TC-LOGIN-008-invalid-both.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser state.
    - expect: Login page is displayed.
  2. Enter invalid_user in Username and wrong_password in Password, then click Login.
    - expect: User remains on the login page.
    - expect: Error message displays: Epic sadface: Username and password do not match any user in this service.
    - expect: No inventory page is opened.

#### 1.9. TC-LOGIN-009 Login with locked-out user credentials

**File:** `tests/login/TC-LOGIN-009-locked-out-user.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser state.
    - expect: Login page is displayed.
  2. Enter locked_out_user in Username and secret_sauce in Password, then click Login.
    - expect: User remains on the login page.
    - expect: Error message displays: Epic sadface: Sorry, this user has been locked out.
    - expect: No inventory page is opened.

#### 1.10. TC-LOGIN-010 Submit valid credentials using Enter key

**File:** `tests/login/TC-LOGIN-010-enter-key-login.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser state.
    - expect: Login page is displayed.
  2. Enter standard_user in Username and secret_sauce in Password, then press Enter while focused in the Password field.
    - expect: Login is submitted.
    - expect: Browser navigates to https://www.saucedemo.com/inventory.html.
    - expect: Products page is displayed.
    - expect: No login error is shown.
