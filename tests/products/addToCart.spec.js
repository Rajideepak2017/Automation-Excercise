const { expect } = require('@playwright/test');
const test = require('../../fixtures/fixture');
const testData =require('../../utils/testData.json');

test.describe('Add to Cart & View Cart', () => {

  test('Verify cart has items and selected product is displayed', async ({ managerPage,page }) => {

    
    // Open login page
    await managerPage.getBasePage().openHomePage();
    await managerPage.getBasePage().acceptConsent();

    // Navigate to Product Page
    await managerPage.getMenuPage().navigateTo(testData.menuNames.products);

    // Capture product name BEFORE adding to cart
    const selectedProductName = (await managerPage.getProductsPage().getFirstProductName()).trim();

    // Add product to cart
    await managerPage.getProductsPage().addFirstProductToCart();

    // View cart
    await managerPage.getProductsPage().clickViewCart();

    // Wait for cart page
    await managerPage.getCartPage().waitForCartPage();

    //Assertions: Verify cart has at least one item
    const cartItemCount = await managerPage.getCartPage().getCartItemCount();
    expect(cartItemCount).toBeGreaterThan(0);

    //Assertions : Verify selected product is present in cart
    const isProductPresent = await managerPage.getCartPage().isProductInCart(selectedProductName);
    expect(isProductPresent).toBeTruthy();
  });

});
