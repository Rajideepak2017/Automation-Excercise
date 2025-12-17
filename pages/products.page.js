class ProductsPage {
  constructor(page) {
    this.page = page;
    this.homeLogo = page.locator('img[alt="Website for automation practice"]');
    this.productsButton = page.locator('a[href="/products"]');
    this.allProductsHeader = page.locator('h2.title.text-center');
    this.searchInput = page.locator('input[id="search_product"]');
    this.searchButton = page.locator('button[id="submit_search"]');
    this.searchedProductsHeader = page.locator('h2.title.text-center:has-text("Searched Products")');
    this.productCards = page.locator('.product-image-wrapper'); 
    this.products = page.locator('.product-image-wrapper').first();
    this.firstAddToCartBtn = page.locator('.product-overlay a.add-to-cart').first();
    this.viewCartLink = page.locator('u:has-text("View Cart")');
    this.firstProductName = this.productCards.first().locator('.productinfo p');
    this.btn = this.products.locator('a.add-to-cart').first();
  }


  async goToProductsPage() {
    await this.productsButton.click();
    await this.allProductsHeader.waitFor({ state: 'visible', timeout: 5000 });
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
    await this.searchedProductsHeader.waitFor({ state: 'visible', timeout: 5000 });
    await this.productCards.first().waitFor({ state: 'visible', timeout: 10000 });
  }

  async addFirstProductToCart() {
    const productCard = this.products;
    await productCard.hover(); 
    await this.btn.waitFor({ state: 'visible', timeout: 5000 });
    await this.btn.click();
  }

  async getFirstProductName() {
    await this.firstProductName.waitFor({ state: 'visible', timeout: 5000 });
    console.log('dresss test : '+ await this.firstProductName.textContent());
    return await this.firstProductName.textContent();
  }

  async clickViewCart() {
    await this.viewCartLink.waitFor({ state: 'visible', timeout: 5000 });
    await this.viewCartLink.click();
  }

  async getNumberOfProducts() {
    return await this.productCards.count();
  }
}

module.exports = { ProductsPage };
