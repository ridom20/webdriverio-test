const checkoutLocator = require('./checkoutLocator');
const productNameSelector = '//div[@data-test="inventory-item-name"]';
const singleProductName = `//button[contains(text(), "Remove")]//ancestor::div[contains(@class,'inventory_item_description')]//div[@data-test="inventory-item-name"]`;
const productPriceSelector = '//div[@data-test="inventory-item-price"]';
const singleProductPrice = `//button[contains(text(), "Remove")]//ancestor::div[contains(@class,'inventory_item_description')]//div[@data-test="inventory-item-price"]`;
class CheckoutAction {
    async clickCartButton () {
        await checkoutLocator.cartButton.click();
    }

    async clickCheckoutButton () {
        await checkoutLocator.checkoutButton.click();
    }

    async enterFirstName (firstName) {
        await checkoutLocator.checkoutFirstName.setValue(firstName);
    }

    async enterLastName (lastName) {
        await checkoutLocator.checkoutLastName.setValue(lastName);
    }

    async enterPostalCode (postalCode) {
        await checkoutLocator.checkoutPostalCode.setValue(postalCode);
    }

    async clickContinueButton () {
        await checkoutLocator.continueButton.click();
    }
    

    async getProductDetailsAndCalculateTotal() {
        const productNames = await $$(productNameSelector).map(async (elem) => await elem.getText());  
        const productPrices = await $$(productPriceSelector).map(async (elem) => {
            const priceText = await elem.getText();
            return parseFloat(priceText.replace('$', ''));
        });   
        const totalPrice = productPrices.reduce((acc, price) => acc + price, 0); 
        return {
            productNames,
            totalPrice: totalPrice.toFixed(2)
        };
    }  

    async getSingleProductDetails() {
        // Retrieve product names
        const singleName = await Promise.all(
            $$(singleProductName).map(async (elem) => await elem.getText())
        );
    
        // Retrieve product prices
        const singlePrice = await Promise.all(
            $$(singleProductPrice).map(async (elem) => {
                const priceText = await elem.getText();
                return parseFloat(priceText.replace('$', ''));
            })
        );
    
        // Log for debugging purposes
        console.log("Product Names:", singleName);
        console.log("Product Prices:", singlePrice);
    
        // Return the values as an object
        return {
            singleName,
            singlePrice,
        };
    }
    
}
module.exports = new CheckoutAction();