class AddToCartLocator {
    get productList() {
        return $$('//div[@data-test="inventory-item"]');
    }
    get priceFromSelectedProduct() {
        return $$(`//button[contains(text(), "Remove")]//ancestor::div[contains(@class,'pricebar')]//div[@data-test="inventory-item-price"]`);
    }
    get nameFromSelectedProduct() {
        return $$(`//button[contains(text(), "Remove")]//ancestor::div[contains(@class,'inventory_item_description')]//div[@data-test="inventory-item-name"]`);
    }

}

module.exports = new AddToCartLocator();