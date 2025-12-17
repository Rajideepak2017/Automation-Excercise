class LoginPage {
  constructor(page) {
    this.page = page;

    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loggedInAsText = page.locator('text=Logged in as'); 
    this.logoutLink = page.locator('a[href="/logout"]');
  }

  async openLoginPage() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.emailInput.waitFor({ state: 'visible', timeout: 5000 });
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.loggedInAsText.waitFor({ state: 'visible', timeout: 5000 });
  }

  async logout() {
    await this.logoutLink.waitFor({ state: 'visible', timeout: 5000 });
    await this.logoutLink.click();
  }
}

module.exports = { LoginPage };
