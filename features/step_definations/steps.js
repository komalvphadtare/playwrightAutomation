const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const { expect } = require('@playwright/test');
const playwright = require('playwright');

Given('I login to the application with usrename {string} and password {string}', async function (username, password) {

    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});

When('Add {string} to the cart', async function (productName) {
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the cart', async function (productName) {
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});

When('Enter valid details and place the order', async function () {
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify the order is displayed in Order history with the product name {string}', async function (productName) {
    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});

Given('I login to the application with usrename {string} and invalid password {string}', async  function (username, invalidPassword) {
    this.loginPage = this.poManager.getLoginPage();
    await this.loginPage.goTo();
    await this.loginPage.validLogin(username, invalidPassword);
});

Then('Verify the error message is displayed {string}', async function (errorMsg) {
  await this.loginPage.invalidLogin(errorMsg);
});