const { expect } = require('@playwright/test');
const test = require('../../fixtures/fixture');
const testData = require('../../utils/testData.json');

test.describe('Product Search', () => {

  testData.products.forEach((product) => {
    test(`Search for product: ${product.name}`, async ({ managerPage, page }) => {
      
      // Open Home page
      await managerPage.getBasePage().openHomePage();
      await managerPage.getBasePage().acceptConsent();

      // Navigate to Products Page
      await managerPage.getMenuPage().navigateTo(testData.menuNames.products);
      await expect(managerPage.getProductsPage().allProductsHeader).toHaveText('All Products');
      await expect(page).toHaveURL(/products/);

      // Search for a product
      await managerPage.getProductsPage().searchProduct(product.name);

      // Assertions: Verify 'SEARCHED PRODUCTS' is visible
      await expect(managerPage.getProductsPage().searchedProductsHeader).toBeVisible();

      // Assertions: Verify at least one product is displayed
      const productCount = await managerPage.getProductsPage().getNumberOfProducts();
      await expect(productCount).toBeGreaterThan(0);
    });
  });

});
