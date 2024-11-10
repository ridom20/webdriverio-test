class MenuLocator {

    get hamburgermenu () {
        return $('//div[@class="bm-burger-button"]/button');
    }
    get resetAction () {
        return $('//a[@data-test="reset-sidebar-link"]');
    }
    get logoutAction () {
        return $('//a[@data-test="logout-sidebar-link"]');
    }
    get clostAction () {
        return $('//div[@class="bm-cross-button"]/button');
    }
}

module.exports = new MenuLocator();