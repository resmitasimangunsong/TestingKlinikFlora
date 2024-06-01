import LoginPage from '../../../pageobjects/auth.page'


describe('login dengan memasukkan data yang valid', async () => {

    it('should login with valid credentials as assistant', async () => {
        await LoginPage.open();
        await LoginPage.login('william@gmail.com', 'william123');

        // Verifikasi URL setelah login
        const targetUrl = await browser.getUrl();
        expect(targetUrl).toBe('http://127.0.0.1:8001/asisten');

        // Verifikasi URL setelah logout
        await LoginPage.logout();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8001/login');

    });

    it('should login with valid credentials as Dokter', async () => {
        await LoginPage.open();
        await LoginPage.login('williamstmrg31@gmail.com', 'flora123');

        // Verifikasi URL setelah login
        const targetUrl = await browser.getUrl();
        expect(targetUrl).toBe('http://127.0.0.1:8001/dokter');

        // Verifikasi URL setelah logout
        await LoginPage.logout();
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toBe('http://127.0.0.1:8001/login');

    });

    it('email salah', async () => {
        await LoginPage.open();
        await LoginPage.login('willii5am@gmail.com', 'william123');
        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-danger')
        await expect(alert).toBeDisplayed();
    });

    it('email kosong', async () => {
        await LoginPage.open();
        await LoginPage.login('', 'william123');
        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.invalid-feedback')
        await expect(alert).toBeDisplayed();
    });

    it('email tidak valid', async () => {
        await LoginPage.open();
        await LoginPage.login('williiam@gmail.com.com', 'william123');
        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-danger')
        await expect(alert).toBeDisplayed();
    });

    it('email tidak valid tanpa @gmail.com', async () => {
        await LoginPage.open();
        await LoginPage.login('williiam', 'william123');
        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.invalid-feedback')
        await expect(alert).toBeDisplayed();
    });

    it('password salah', async () => {
        await LoginPage.open();
        await LoginPage.login('williiam@gmail.com', 'willia6666m123');
        // Verifikasi bahwa pesan sukses muncul
        const alert = $('.alert-danger')
        await expect(alert).toBeDisplayed();
    });
});


