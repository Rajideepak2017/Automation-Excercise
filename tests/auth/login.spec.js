const { expect } = require('@playwright/test');
const ManagerPage = require('../../pages/manager.page');
const registeredUser = require('../../utils/registeredUser.json');
const test = require('../../fixtures/fixture');
const testData =require('../../utils/testData.json');

test.describe('User Login / Logout', () => {

  test('Login with registered user', async ({ managerPage,page }) => {

    // Open login page
    await managerPage.getBasePage().openHomePage();
    await managerPage.getBasePage().acceptConsent();

    // Navigate to Login Page
    await managerPage.getMenuPage().navigateTo(testData.menuNames.login);
    

    // Login using saved credentials
    await managerPage.getLoginPage().login(registeredUser.email, registeredUser.password);

    // Assertion: Verify LoggedIn text is visible
    await expect(managerPage.getLoginPage().loggedInAsText).toBeVisible();

    // Logout
    await managerPage.getLoginPage().logout();

    // Assertion:Verify Login button is visible again
    await expect(managerPage.getLoginPage().loginButton).toBeVisible();
  });

});
