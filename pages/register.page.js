class RegisterPage {
  constructor(page) {
    this.page = page;

    this.signupName = page.locator('input[data-qa="signup-name"]');
    this.signupEmail = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.genderMr = page.locator('#id_gender1');
    this.password = page.locator('#password');
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.address = page.locator('#address1');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobile = page.locator('#mobile_number');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');
    this.accountCreatedText = page.locator('text=Account Created!');
  }

  async openSignupPage() {
    await this.page.goto('/login');
    await this.signupName.waitFor({ state: 'visible', timeout: 5000 });
  }

  async startSignup(name, email) {
    
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);
    await this.signupButton.click();
    await this.genderMr.waitFor({ state: 'visible', timeout: 5000 });
  }


  async fillAccountDetails(password,firstName,lastName,address,state,city,zipcode,mobile) {
    
  await this.genderMr.check();
  await this.password.fill(password);
  await this.firstName.fill(firstName);
  await this.lastName.fill(lastName);
  await this.address.fill(address);
  await this.state.fill(state);
  await this.city.fill(city);
  await this.zipcode.fill(zipcode);
  await this.mobile.fill(mobile);
  await this.createAccountButton.waitFor({ state: 'visible', timeout: 5000 });
  await this.createAccountButton.click();
  await this.accountCreatedText.waitFor({ state: 'visible', timeout: 5000 });
    
  }
}

module.exports = { RegisterPage };
