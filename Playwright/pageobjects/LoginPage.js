const { expect } = require("@playwright/test");
class LoginPage {

constructor(page)
{
    this.page = page;
    this.signInbutton= page.locator("[value='Login']");
    this.userName = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
    this.erroMessage = page.locator('#toast-container');

}

async goTo()
{
    await this.page.goto("https://rahulshettyacademy.com/client");
}

async validLogin(username,password)
{
    await  this.userName.type(username);
     await this.password.type(password);
     await this.signInbutton.click();
     await this.page.waitForLoadState('networkidle');
}

async invalidLogin(errorMessage) {
    // await  this.userName.type(username);
    //  await this.password.type(password);
    //  await this.signInbutton.click();
    // await this.page.e
     await expect(this.erroMessage).toContainText(errorMessage);
    //  await expect(this.emailId).toHaveText(username);
}

}
module.exports = {LoginPage};