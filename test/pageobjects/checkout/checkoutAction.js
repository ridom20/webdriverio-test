const checkoutLocator = require("./checkoutLocator");
const productNameSelector = '//div[@data-test="inventory-item-name"]';
const productPriceSelector = '//div[@data-test="inventory-item-price"]';
const Utility = require("../../Utilities/utility");
class CheckoutAction {
  async clickCartButton() {
    await checkoutLocator.cartButton.click();
  }

  async clickCheckoutButton() {
    await checkoutLocator.checkoutButton.click();
  }

  async enterFirstName(firstName) {
    await checkoutLocator.checkoutFirstName.setValue(firstName);
  }

  async enterLastName(lastName) {
    await checkoutLocator.checkoutLastName.setValue(lastName);
  }

  async enterPostalCode(postalCode) {
    await checkoutLocator.checkoutPostalCode.setValue(postalCode);
  }

  async clickContinueButton() {
    await checkoutLocator.continueButton.click();
  }

  async getProductDetailsAndCalculateTotal() {
    const productNames = await $$(productNameSelector).map(async (elem) => await elem.getText());
    const productPrices = await $$(productPriceSelector).map(async (elem) => {
      const priceText = await elem.getText();
      return await Utility.convertTextToNumber(priceText);
    });

    const itemPrice = productPrices.reduce((acc, price) => acc + price, 0);
    const vat = itemPrice * 0.08;
    const totalPriceWithVAT = itemPrice + vat;

    const adjustedTotalPrice = Math.ceil(totalPriceWithVAT * 100) / 100;
    const adjustedItemPrice = Math.ceil(itemPrice * 100) / 100;
    const adjustedVat = Math.ceil(vat * 100) / 100;

    // Convert the formatted string values back to numbers and return
    return {
      productNames,
      itemPrice: parseFloat(adjustedItemPrice.toFixed(2)),
      vat: parseFloat(adjustedVat.toFixed(2)),
      totalPriceWithVAT: parseFloat(adjustedTotalPrice.toFixed(2)),
    };
  }

  async getCheckoutItemPrice() {
    const checkoutItemPrice = await checkoutLocator.checkoutItemPrice.getText();
    const checkoutItemPriceNumber = await Utility.convertTextToNumber(checkoutItemPrice);
    return checkoutItemPriceNumber;
  }

  async getCheckoutTax() {
    const checkoutTax = await checkoutLocator.checkoutTax.getText();
    const checkoutTaxNumber = await Utility.convertTextToNumber(checkoutTax);
    return checkoutTaxNumber;
  }

  async getCheckoutTotalPrice() {
    const checkoutTotalPrice = await checkoutLocator.checkoutTotalPrice.getText();
    const checkoutTotalPriceNumber = await Utility.convertTextToNumber(checkoutTotalPrice);
    return checkoutTotalPriceNumber;
  }
  async clickFinishBtn() {
    await checkoutLocator.finishBtn.click();
  }
  async getSuccessMessage() {
    return await checkoutLocator.successMessage.getText();
  }
  async clickBackhBtn() {
    await checkoutLocator.backhBtn.click();
  }
}
module.exports = new CheckoutAction();
