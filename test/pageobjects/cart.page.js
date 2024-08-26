import Page from "./page";
import { $, expect } from '@wdio/globals';

class CartPage extends Page {
    get cartIcon() {
        return $('//*[@id="shopping_cart_container"]/a');
    }

    get addToCartButton() {
        return $("#add-to-cart-sauce-labs-backpack");
    }

    get cartBadge() {
        return $('#shopping_cart_container > a > span');
    }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async validateItemAdded() {
        await expect(this.cartBadge).toHaveText('1');
    }

    open() {
        return super.open("cart.html");
    }
}

export default new CartPage();
