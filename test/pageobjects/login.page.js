import { $ } from '@wdio/globals';
import Page from './page.js';

class LoginPage extends Page {
    get usernameBox() {
        return $("#user-name");
    }

    get passwordBox() {
        return $("#password");
    }

    get loginButton() {
        return $('//input[@type="submit"]');
    }

    get errorMessageContainer() {
        return $('.error-message-container.error');
    }

    get errorMessage() {
        return this.errorMessageContainer.$('h3[data-test="error"]');
    }

    get errorButton() {
        return this.errorMessageContainer.$('button[data-test="error-button"]');
    }

    async inputUsername(username) {
        await this.usernameBox.setValue(username);
    }

    async inputPassword(password) {
        await this.passwordBox.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLoginButton();
    }

    async validateUnsuccessfulLogin() {
        await expect(this.errorMessageContainer).toBeExisting(); 
        await expect(this.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service'); 
    }

    async closeErrorMessage() {
        await this.errorButton.click(); 
    }

    open() {
        return super.open("");
    }
}

export default new LoginPage();
