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
}

module.exports = new CheckoutLocator()