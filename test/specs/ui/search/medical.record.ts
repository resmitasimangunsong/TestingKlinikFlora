import LoginPage from '../../../pageobjects/auth.page.ts'
import medicalRecord from '../../../pageobjects/medical.record.ts';


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
        // Navigate to your application's URL
        await medicalRecord.open()
        await medicalRecord.searchPatient("Gunawan");

        //menekan button medicalRecord
        await medicalRecord.editMedicalRecord()

        const title = $('.title');
        await expect(title).toContain('Hasil Pemeriksaan Kesehatan')


    });
});