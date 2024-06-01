import { $ } from '@wdio/globals'
import Page from './page';
//import { Selector } from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CreatePasien extends Page {

    public get nameInput() {
        return $('#name');
    }

    public get dateInput() {
        return $('#tanggal_lahir');
    }

    public get genderDropdown() {
        return $('#gender');
    }
    public get addressInput() {
        return $('#address');
    }
    public get waliInput() {
        return $('#wali');
    }

    public get phoneInput() {
        return $('#phone_number');
    }

    public get btnTambah() {
        return $('button.btn-success');
    }
    // public get alert() {
    //     return $('.alert-success');

    // }
     

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async createPasien(name: string, tanggal_lahir: string, gender: string, address: string, wali :string, phone_number: string) {

        await this.nameInput.setValue(name);
        await this.dateInput.setValue(tanggal_lahir);
        await this.genderDropdown.selectByVisibleText(gender);
        await this.addressInput.setValue(address);
        await this.waliInput.setValue(wali);
        await this.phoneInput.setValue(phone_number);

        await this.btnTambah.waitForClickable();
        await this.btnTambah.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public navigateToCreatePatient() {
        return super.open('patients/create/');
    }
}

export default new CreatePasien();
