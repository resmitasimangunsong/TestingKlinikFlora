import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('div.alert.alert-success.alert-dismissible.fade.show.mt-2');
    }
}

export default new SecurePage();
