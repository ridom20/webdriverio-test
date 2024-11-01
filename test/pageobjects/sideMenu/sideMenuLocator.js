class MenuLocator {

    get hamburgermenu () {
        return $('//div[@class="bm-burger-button"]/button');
    }
    get resetAction () {
        return $('//a[@data-test="reset-sidebar-link"]');
    }
    get clostAction () {
        return $('//div[@class="bm-cross-button"]/button');
    }
}

module.exports = new MenuLocator();