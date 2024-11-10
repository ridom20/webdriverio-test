class CheckoutLocator {

    get cartButton (){
        return $('//a[@data-test="shopping-cart-link"]');
    }
    get checkoutButton () {
        return $('//button[@name="checkout"]');
    }
    get checkoutFirstName () {
        return $('//input[@name="firstName"]');
    }
    get checkoutLastName () {
        return $('//input[@name="lastName"]');
    }
    get checkoutPostalCode () {
        return $('//input[@name="postalCode"]');
    } 
    get continueButton () {
        return $('//input[@name="continue"]');
    }
    get checkoutProductName () {
        return $$('//div[@class="cart_item_label"]//div[@data-test="inventory-item-name"]');
    }
    get checkoutProductPrice () {
        return $$('//div[@class="cart_item_label"]//div[@data-test="inventory-item-price"]');
    }
    get checkoutItemPrice () {
        return $('//div[@data-test="subtotal-label"]');
    }
    get checkoutTotalPrice () {
        return $('//div[@data-test="total-label"]');
    }
    get checkoutTax () {
        return $('//div[@data-test="tax-label"]');
    }
    get finishBtn () {
        return $('//button[@name="finish"]');
    }
    get successMessage () {
        return $(`//h2[@data-test="complete-header"]`);
    }
    get backhBtn () {
        return $('//button[@name="back-to-products"]');
    }
}

module.exports = new CheckoutLocator()