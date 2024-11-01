const loginAction = require('../pageobjects/login/loginAction');
const username = 'locked_out_user';
const password = 'secret_sauce';

describe("Swag Labs auth journey", () => {
    it("should login with valid credentials", async () => {
        await loginAction.enterUsername(username);
        await loginAction.enterPassword(password);
        await loginAction.clickLogin();
        await browser.pause(5000);

        const errorMessage = await loginAction.getErrorMessage();
        expect(errorMessage).toEqual('Epic sadface: Sorry, this user has been locked out.');

    });
})