import { $ } from '@wdio/globals'
import Page from './page';
//import { Selector } from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
//  */
class EditPatientPage extends Page {
    get inputSearch() {
        return $('input[class="search form-control"]');
    }

    get btnSearch() {
        return $('button[type="submit"]');
    }

    get searchResult() {
        return $('.table-hover tbody tr'); // Ganti dengan selektor yang sesuai di halaman Anda
    }
    //edit data pasien

    public get iconEdit() {
        return  $('.material-icons');
    }
    public get inputName() {
        return $('input[type="text"]');
    }
    public get inputDate() {
        return $('input[name="tanggal_lahir"]');
    }
    public get inputGender() {
        return $('#gender');
    }
    public get inputAddress() {
        return $('#address');
    }
    public get inputPhoneNumber() {
        return $('#phone_number');
    }
    public get btnUpdate() {
        return $('button.btn-success');
    }

    //     /**
    //      * a method to encapsule automation code to interact with the page
    //      * e.g. to login using username and password
    //      */
    async searchPatient(Patient: string | number) {
        await this.inputSearch.setValue(Patient);
    }
    async icon_edit() {
        await this.iconEdit.waitForClickable();
        await this.iconEdit.click();

    }
    async editName(Name: string ) {
        await this.inputName.setValue(Name);
    }
    async editDate(Date: string ) {
        await this.inputDate.setValue(Date);
    }
    async editGender(Gender: string ) {
        (await this.inputGender).selectByVisibleText(Gender)
    }
    async editAddress(Address: string ) {
        await this.inputAddress.setValue(Address);
    }
    async editPhoneNumber(PhoneNumber: string ) {
        await this.inputPhoneNumber.setValue(PhoneNumber);
    }

    async clickBtn(){
        await this.btnUpdate.waitForClickable();
        await this.btnUpdate.click();

    }

    //     /**
    //      * overwrite specific options to adapt it to page object
    //      */
    public open() {
        return super.open('patients/show/');
    }
    public asDokter() {
        return super.open('patients/show/dokter');
    }

    // export default new TabelPasien();

}


export default new EditPatientPage();
