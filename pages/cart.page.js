class CartPage {
  constructor(page) {
    this.page = page;
    this.cartTable = page.locator('#cart_info_table');
    this.cartItems = page.locator('td.cart_product');
    this.cartProductNames = page.locator('.cart_description h4 a');
  }

  async waitForCartPage() {
    await this.cartTable.waitFor({ state: 'visible', timeout: 5000 });
  }

  async getCartItemCount() {
    await this.cartItems.first().waitFor({ state: 'visible', timeout: 5000 });
    return await this.cartItems.count();
  }

  async isProductInCart(productName) {
    const names = await this.cartProductNames.allTextContents();
    return names.some(name => name.trim() === productName.trim());
  }
}

module.exports = { CartPage };
