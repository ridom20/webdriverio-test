class FilterLocator {
    get filterDropdown () {
        return $('//select[@data-test="product-sort-container"]');
    }
    get specificFilter () {
        return $('//select[@data-test="product-sort-container"]/option[@value="za"]');
    }
}
module.exports = new FilterLocator();