describe('My Login application', () => {
    it('login with correct email and password', async () => {
        await browser.url(`https://sit.kindicare.com/`);
        let username = "kindicare";
        let password = "kindicare123";
        let URL = "https://" + username + ":" + password + "@" + "sit.kindicare.com/"; 
        await browser.url(URL);
        await browser.pause(5000);

        // git init -b mainLocation popup
        // await $("//div[@class='request-location__title']");
        // await $("//div[@class='request-location__group-btn']//button[1]").click();

        await $("//span[text()='Log In']//parent::button").click();
        await $("//span[text()='As a Parent']//parent::li").click();
        await $("//input[@id='email']").setValue('hieu02@gmail.com');
        await $("//input[@id='password']").setValue('hieu123456');
        await $("//span[text()='Login']//parent::button[@type='submit']").click();
        
        await browser.pause(5000);
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitleContaining("Kindicare | Find and Compare Childcare Centres Nearby")
    //

    });
});
//test