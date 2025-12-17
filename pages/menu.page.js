class MenuPage {
  constructor(page) {
    this.page = page;
    this.menuItems = page.locator('ul.navbar-nav li a:visible'); 
  }

  async navigateTo(menuName) {
    const count = await this.menuItems.count();

    for (let i = 0; i < count; i++) {
      const item = this.menuItems.nth(i);
      const text = (await item.innerText()).trim();

      if (text.toLowerCase().includes(menuName.toLowerCase())) {
        await item.click();
        return;
      }
    }

    throw new Error(`Menu item "${menuName}" not found`);
  }
}

module.exports = { MenuPage };
