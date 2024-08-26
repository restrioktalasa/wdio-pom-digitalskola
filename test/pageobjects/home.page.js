import Page from "./page";
import { $, expect } from '@wdio/globals';

class HomePage extends Page {
    get cartIcon() {
        return $('//*[@id="shopping_cart_container"]/a');
    }

    get AddtoCartButton() {
        return $("#add-to-cart-sauce-labs-backpack");
    }

    get ItemName() {
        return $("#item_4_title_link");
    }

    async validateOnHomePage() { 
        await expect(this.ItemName).toBeExisting();
        await expect(this.cartIcon).toBeExisting();
        await expect(this.AddtoCartButton).toBeExisting();
    }

    open() {
        return super.open("inventory.html");
    }
}

export default new HomePage();
