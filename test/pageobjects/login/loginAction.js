const loginLocator = require('./loginLocator');

class LoginAction {
    async enterUsername (username) {
        await loginLocator.inputUsername.setValue(username);
    }

    async enterPassword (password) {
        await loginLocator.inputPassword.setValue(password);
    }

    async clickLogin () {
        await loginLocator.loginBtn.click();
    }

    async getErrorMessage () {
        return await loginLocator.errorMessage.getText();
    }
}

module.exports = new LoginAction();