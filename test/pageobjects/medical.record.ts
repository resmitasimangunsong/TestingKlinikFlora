import { $ } from '@wdio/globals'
import Page from './page';
//import { Selector } from 'webdriverio';

/**
 * sub page containing specific selectors and methods for a specific page
//  */
class medicalrecordPage extends Page {
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
public get btnViewRecord() {
    return $('.btn.btn-success');
}

    //     /**
    //      * a method to encapsule automation code to interact with the page
    //      * e.g. to login using username and password
    //      */
    async searchPatient(Patient: string | number) {
        await this.inputSearch.setValue(Patient);
    }

    async editMedicalRecord(){
       await this.btnViewRecord.waitForClickable();
        await this.btnViewRecord.click();

    }

    //     /**
    //      * overwrite specific options to adapt it to page object
    //      */
    public open() {
        return super.open('Medical/show/');
    }

    // export default new TabelPasien();

}


export default new medicalrecordPage();