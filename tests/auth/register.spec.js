const {expect } = require('@playwright/test');
const test = require('../../fixtures/fixture');
const testData =require('../../utils/testData.json');
const fs = require('fs');
const ManagerPage = require('../../pages/manager.page');
const { writeJSONFile } = require('../../utils/helper');

test.describe('User Registration', () => {

  testData.users.forEach((user) => {
    test(`Register new user: ${user.name}`, async ({ managerPage,page }) => {
     
      // Generate unique email
      const email = `${user.emailPrefix}_${Date.now()}@test.com`;

     
      // Open login page
      await managerPage.getBasePage().openHomePage();
      await managerPage.getBasePage().acceptConsent();

      // Navigate to Signup Page
      await managerPage.getMenuPage().navigateTo(testData.menuNames.login);
     

      // Start signup
      await managerPage.getRegisterPage().startSignup(user.name, email);

      // Fill account details using individual parameters
      await managerPage.getRegisterPage().fillAccountDetails(
        user.password,
        user.firstName,
        user.lastName,
        user.address,
        user.state,
        user.city,
        user.zipcode,
        user.mobile
      );

      // Assertions : Verify the Account Created text is visible
      await expect(managerPage.getRegisterPage().accountCreatedText).toBeVisible();
      await expect(page).toHaveURL(/account_created/);

      const registeredUser = {email: email,password: user.password};
      writeJSONFile('./utils/registeredUser.json', registeredUser);
    });
  });

});
