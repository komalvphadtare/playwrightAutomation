import {test, expect} from '@playwright/test'
let webContext;

test.beforeAll('login', async({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.getByRole("textbox", {name: 'Email'}).fill("automationpractice1@gmail.com");
    await page.getByPlaceholder("enter your passsword").fill("Test@1234");
    await page.getByRole("button").click();
    await page.waitForLoadState('networkidle');
    
    await context.storageState({path : 'state.json'});
    webContext = await browser.newContext({storageState:'state.json'});

});

test('print title', async () =>{
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
    // await page.pause();
    const titles = await page.locator(".card-body h5 b").allTextContents();
    console.log(titles);
});

test('click on Add to cart', async () =>{
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
    // await page.pause();
    const allProducts = page.locator(".card-body");

    const size = await allProducts.count();
    console.log(size);
    
    for(let i = 0; i<size ; i++) {
        if(await allProducts.nth(i).locator("b").textContent() === 'ADIDAS ORIGINAL') {
            await allProducts.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }
    await page.locator(".btn.btn-custom[routerlink='/dashboard/cart']").click();
    await page.locator(".cart").waitFor();
    await page.pause();
    await expect (page.locator(".cartSection h3")).toHaveText("ADIDAS ORIGINAL");
    

})