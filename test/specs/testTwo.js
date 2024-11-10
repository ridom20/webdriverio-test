const loginAction = require("../pageobjects/login/loginAction");
const sideMenu = require("../pageobjects/sideMenu/sideMenuAction");
const addToCartAction = require("../pageobjects/addToCart/addToCartAction");
const addToCartLocator = require("../pageobjects/addToCart/addToCartLocator");
const checkoutAction = require("../pageobjects/checkout/checkoutAction");
const Utility = require("../Utilities/utility");

const username = "standard_user";
const password = "secret_sauce";
var firstName = "";
var lastName = "";
var postalCode = "";

describe("Swag Labs product purchase journey One", () => {
  it("should login with valid credentials", async () => {
    await loginAction.enterUsername(username);
    await loginAction.enterPassword(password);
    await loginAction.clickLogin();
    await browser.pause(5000);
  });
  it("should reset the sidebar", async () => {
    await sideMenu.clickHamburgerMenu();
    await sideMenu.clickResetAction();
    await sideMenu.clickCloseAction();
    await browser.pause(5000);
  });

  it("should select three products and add them to cart", async () => {
    const products = await addToCartLocator.productList;
    const numberOfProductsToSelect = 3;

    if (products.length < numberOfProductsToSelect) {
      throw new Error(`Not enough products to select ${numberOfProductsToSelect} items.`);
    }
    const selectedIndices = await Utility.getRandomIndices(numberOfProductsToSelect, products.length);

    for (const index of selectedIndices) {
      await addToCartAction.clickAddToCart(index);
    }

    await browser.pause(5000);
  });
  it("should proceed to checkout", async () => {
    await checkoutAction.clickCartButton();
    await checkoutAction.clickCheckoutButton();
    firstName = await Utility.randomString(6);
    lastName = await Utility.randomString(6);
    postalCode = await Utility.randomNumber(10000, 99999);
    await checkoutAction.enterFirstName(firstName);
    await checkoutAction.enterLastName(lastName);
    await checkoutAction.enterPostalCode(postalCode);
    await checkoutAction.clickContinueButton();
    await browser.pause(5000);
  });
  it("successfully verifies product names and total price dynamically", async () => {
    const { itemPrice, vat, totalPriceWithVAT } = await checkoutAction.getProductDetailsAndCalculateTotal();
    const checkoutItemPrice = await checkoutAction.getCheckoutItemPrice();
    const checkoutTax = await checkoutAction.getCheckoutTax();
    const checkoutTotalPrice = await checkoutAction.getCheckoutTotalPrice();
    const cartItems = await $$(".cart_item");

    if (cartItems.length === 0) {
      console.error("No cart items found!");
      return;
    }
    expect(checkoutItemPrice).toEqual(itemPrice);
    expect(checkoutTax).toEqual(vat);
    expect(checkoutTotalPrice).toEqual(totalPriceWithVAT);
  });
  it("successfully finish purchase journey and verify the successful order message", async () => {
    await checkoutAction.clickFinishBtn();
    await browser.pause(5000);
    const successMessage = await checkoutAction.getSuccessMessage();
    expect(successMessage).toEqual("Thank you for your order!");
    await checkoutAction.clickBackhBtn();
  });
  it("successfully reset app state and logout the user", async () => {
    await sideMenu.clickHamburgerMenu();
    await sideMenu.clickResetAction();
    await sideMenu.clickLogoutAction();
    await browser.pause(5000);
  });
});
