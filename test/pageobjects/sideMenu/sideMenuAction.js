const menuLocator = require('./sideMenuLocator');

class SideMenuAction {
    async clickHamburgerMenu () {
        await menuLocator.hamburgermenu.click();
    }

    async clickResetAction () {
        await menuLocator.resetAction.click();
    }
    async clickLogoutAction () {
        await menuLocator.logoutAction.click();
    }

    async clickCloseAction () {
        await menuLocator.clostAction.click();
    }
}   

module.exports = new SideMenuAction();