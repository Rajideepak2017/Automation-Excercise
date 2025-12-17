const{test : base}= require('@playwright/test');
const PoTest = require('../pages/manager.page');
const ManagerPage = require('../pages/manager.page');

const test=base.extend({
    managerPage: async({page},use)=>{
        const poPage = new ManagerPage(page);
        await use(poPage);
    }
});

module.exports=test;