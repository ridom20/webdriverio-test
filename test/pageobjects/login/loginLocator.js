class LoginLocator {
    get inputUsername () {
        return $(`//input[@name="user-name"]`);
    } 
    get inputPassword () {
        return $(`//input[@name="password"]`);
    }    
    get loginBtn () {
        return $(`//input[@name="login-button"]`);
    }
    get errorMessage () {
        return $(`//h3[@data-test="error"]`);
    }
}

module.exports = new LoginLocator()