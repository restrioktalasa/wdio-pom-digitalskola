import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Sauce Demo', () => {
    it('Login Successfull', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HomePage.validateOnHomePage(); 
    });

    it('Login Unsuccessful', async () => {
        await LoginPage.open();  
        await LoginPage.login('invalid_user', 'wrong_password');
        await LoginPage.validateUnsuccessfulLogin();
    });

    it('Add item to Cart', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await HomePage.validateOnHomePage();
        await CartPage.addItemToCart();
        await CartPage.validateItemAdded();
    });

});

