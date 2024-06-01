import LoginPage from '../../../pageobjects/auth.page.ts'
import EditPatientPage from '../../../pageobjects/edit.patient.page.ts';


const email = 'williamstmrg31@gmail.com';
const password = 'flora123';
//const medicineName = 'william123';

describe('Patient Search', () => {
    it('should login with valid credentials', async () => {
        // Navigate to your application's URL
        await LoginPage.open();
        await LoginPage.login(email, password);
    })

    it('mengedit nama pasien', async () => {
        // Navigate to your applcation's URL
        await EditPatientPage.asDokter()
        await EditPatientPage.searchPatient("res44");

        //menekan button edit
        await EditPatientPage.icon_edit()
        //mengedit nama
        await EditPatientPage.editName('resa');
        //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).toBeDisplayed();
    });
    it('mengedit tanggal lahir pasien  valid', async () => {
     // Navigate to your application's URL
     await EditPatientPage.asDokter()
     await EditPatientPage.searchPatient("resa");

     //menekan button edit
     await EditPatientPage.icon_edit()

        await EditPatientPage.editDate('11-12-2022');
     //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).toBeDisplayed();
    });

    it('mengedit jenis kelamin  pasien', async () => {
        // Navigate to your application's URL
        await EditPatientPage.asDokter()
        await EditPatientPage.searchPatient("resa");

        //menekan button edit
        await EditPatientPage.icon_edit()
        //mengedit nama
        await EditPatientPage.editGender('Laki-laki');
        //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).toBeDisplayed();
    });

    it('mengedit alamat pasien', async () => {
        // Navigate to your application's URL
        await EditPatientPage.asDokter()
        await EditPatientPage.searchPatient("resa");
        //menekan button edit
        await EditPatientPage.icon_edit()
        //mengedit nama
        await EditPatientPage.editAddress('jawa');
        //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).toBeDisplayed();
    });

    it('mengedit nomor telepon  pasien', async () => {
        // Navigate to your application's URL
        await EditPatientPage.asDokter()
        await EditPatientPage.searchPatient("resa");

        //menekan button edit
        await EditPatientPage.icon_edit()
        //mengedit nama
        await EditPatientPage.editPhoneNumber('081262425029');
        //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).toBeDisplayed();
    });

    it('mengedit nomor telepon > 13 angka pasien', async () => {
        // Navigate to your application's URL
        await EditPatientPage.asDokter()
        await EditPatientPage.searchPatient("resa");

        //menekan button edit
        await EditPatientPage.icon_edit()
        //mengedit nama
        await EditPatientPage.editPhoneNumber('081262425029333');
        //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).not.toBeDisplayed();
    });

    it('mengedit nomor telepon pasien mengandung huruf', async () => {
        // Navigate to your application's URL
        await EditPatientPage.asDokter()
        await EditPatientPage.searchPatient("resa");

        //menekan button edit
        await EditPatientPage.icon_edit()
        //mengedit nama
        await EditPatientPage.editPhoneNumber('0812624250df');
        //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).not.toBeDisplayed();
    });

    it('mengedit nomor telepon < 11 angka pasien', async () => {
        // Navigate to your application's URL
        await EditPatientPage.asDokter()
        await EditPatientPage.searchPatient("resa");

        //menekan button edit
        await EditPatientPage.icon_edit()
        //mengedit nama
        await EditPatientPage.editPhoneNumber('0812629');
        //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).not.toBeDisplayed();
    });

    it('mengedit jenis kelamin  pasien dikosongkan', async () => {
        // Navigate to your application's URL
        await EditPatientPage.asDokter()
        await EditPatientPage.searchPatient("resa");

        //menekan button edit
        await EditPatientPage.icon_edit()
        //mengedit nama
        await EditPatientPage.editGender('Jenis kelamin');
        //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).not.toBeDisplayed();
    });

    it('mengedit tanggal lahir pasien tidak valid', async () => {
        // Navigate to your application's URL
        await EditPatientPage.asDokter()
        await EditPatientPage.searchPatient("resa");

        //menekan button edit
        await EditPatientPage.icon_edit()
        //mengedit nama
        await EditPatientPage.editDate('11-12-2342');
        //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).not.toBeDisplayed();
    });

    it('mengedit nama pasien mengandung angka', async () => {
        // Navigate to your application's URL
        await EditPatientPage.asDokter()
        await EditPatientPage.searchPatient("resa");

        //menekan button edit
        await EditPatientPage.icon_edit()
        //mengedit nama
        await EditPatientPage.editName('res44');
        //mengklik button update
        await EditPatientPage.clickBtn()

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).not.toBeDisplayed();
    });
});