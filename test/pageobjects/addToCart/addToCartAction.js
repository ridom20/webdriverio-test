const addToCartLocator = require("./addToCartLocator");
const Utility = require("../../Utilities/utility");
class AddToCartAction {
    async clickAddToCart(productIndex) {
        const product = await addToCartLocator.productList[productIndex];
        const addToCartButton = await product.$('.btn_inventory');
        await addToCartButton.click();
    
        // Verify "Remove" button appears after clicking
        const isInCart = await addToCartButton.getText();
        if (isInCart !== "Remove") {
            throw new Error(`Failed to add product at index ${productIndex} to the cart. "Remove" button not found.`);
        }
    }
}

module.exports = new AddToCartAction();
