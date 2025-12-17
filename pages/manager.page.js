const { RegisterPage } = require('../pages/register.page');
const {BasePage} = require('../pages/base.page');
const { LoginPage } = require('../pages/login.page');
const{ProductsPage}= require('../pages/products.page');
const { CartPage } = require('./cart.page');
const{MenuPage} = require('../pages/menu.page');

class ManagerPage{
    constructor(page){
        this.page = page;
        this.basePage = new BasePage(page);
        this.registerPage = new RegisterPage(page);
        this.loginPage = new LoginPage(page);
        this.productsPage = new ProductsPage(page);
        this.cartPage = new CartPage(page);
        this.menuPage = new MenuPage(page);
    }

    getLoginPage(){
        return this.loginPage;
    }

    getRegisterPage(){
        return this.registerPage;
    }

    getBasePage(){
        return this.basePage;
    }

    getProductsPage(){
        return this.productsPage;
    }

    getCartPage(){
        return this.cartPage;
    }

    getMenuPage(){
        return this.menuPage;
    }
}
module.exports= ManagerPage;