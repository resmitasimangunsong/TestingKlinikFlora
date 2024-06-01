 import LoginPage from '../../../pageobjects/auth.page'
import CreatePasien from '../../../pageobjects/pasien.create.page'


const email = 'william@gmail.com';
const password = 'william123';


describe('Edit data pasien', async () => {

    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(email, password);
    })

    it('Fill in patient data correctly', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien(
            're',
            '2003-12-22',
            'Laki-Laki',
            'Jakarta',
            'rendra',
            '081262425039')

        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-success')
        await expect(alert).toBeDisplayed();


    });

    it('Name input is missing', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('',
            '2003-12-22',
            'Laki-Laki',
            'jawa',
            'arga',
            '081262425029')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('Missing date input', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('rosa',
            '',
            'Laki-Laki',
            'jawa',
            'arga',
            '081262425029')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('Gender input is missing', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('rosa',
            '2003-12-22',
            'Jenis Kelamin',
            'jawa',
            'arga',
            '081262425029')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('The address input is missing', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('resa',
            '2003-12-22',
            'Laki-Laki',
            '',
            'arga',
            '081262425029')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('There is no guardian input', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('resa',
            '2003-12-22',
            'Laki-Laki',
            'jawa',
            '',
            '081262425029')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('There is no cellphone number input', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('resa',
            '2003-12-22',
            'Laki-Laki',
            'jawa',
            'arga',
            '')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

   it('Input cellphone number less than 11', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('resa',
            '2003-12-22',
            'Laki-Laki',
            'jawa',
            'arga',
            '0812624250')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('Input cellphone number more than 13', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('resa',
            '2003-12-22',
            'Laki-Laki',
            'jawa',
            'arga',
            '08126242502978')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('The cellphone number input contains a string', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('resa',
            '2003-12-22',
            'Laki-Laki',
            'jawa',
            'arga',
            '0812sss')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('The name input contains numbers', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('res4',
            '2003-12-22',
            'Laki-Laki',
            'jawa',
            'arga',
            '081262425029')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')
        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('The name input contains symbols', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('res.',
            '2003-12-22',
            'Laki-Laki',
            'jawa',
            'arga',
            '081262425029')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('The guardian input contains numbers', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('resa',
            '2003-12-22',
            'Laki-Laki',
            'jawa',
            'arg4',
            '081262425029')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });

    it('The guardian input contains symbols', async () => {
        // Navigate to your application's URL
        await CreatePasien.navigateToCreatePatient()

        await CreatePasien.createPasien('resa',
            '2003-12-22',
            'Laki-Laki',
            'jawa',
            'arg@.',
            '081262425029')

        // Verifikasi bahwa pesan sukses tidak muncul
        const alert = $('.alert-success')

        await expect(alert).not.toBeDisplayed();

        console.log('Field validation works as expected!');
    });
});

