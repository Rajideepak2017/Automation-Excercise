class BasePage {
  constructor(page) {
    this.page = page;
    this.consent = page.getByRole('button', { name: 'Consent' });
  }

  async acceptConsent() {
    try {
      if (await this.consent.isVisible({ timeout: 3000 })) {
        await this.consent.click();
        console.log("Consent accepted");
      }
    } catch (error) {
      console.log("Consent button not present or already accepted");
    }
  }

  async openHomePage(){
        await this.page.goto('/');
}
}



module.exports = { BasePage };
