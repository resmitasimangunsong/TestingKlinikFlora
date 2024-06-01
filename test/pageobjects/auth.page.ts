import { $ } from '@wdio/globals'
import Page from './page';
//import { Selector } from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
//login
    public get inputEmail () {
        return $('#email');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }
//log out
public get dropDown () {
    return $('.dropdown-toggle');
}
public get logOutBtn () {
    return $('.dropdown-item[title="Logout"]');
}


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async logout () {
        await this.dropDown.click();
        await this.logOutBtn.waitForDisplayed();
        await this.logOutBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
