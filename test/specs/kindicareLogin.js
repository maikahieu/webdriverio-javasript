describe("My Login application", () => {
  it( 'can handle commands synchronously', async () => {
    await browser.url(`https://sit.kindicare.com/`);
    let username = "kindicare";
    let password = "kindicare123";
    let URL =
      "https://" + username + ":" + password + "@" + "sit.kindicare.com/";
    await browser.url(URL);
    await browser.pause(1000);

    // git init -b mainLocation popup
    // await $("//div[@class='request-location__title']");
    // await $("//div[@class='request-location__group-btn']//button[1]").click();

    await $("//span[text()='Log In']//parent::button").click();
    await $("//span[text()='As a Parent']//parent::li").click();
    const email = $("//input[@id='email']");
    await email.setValue("hieu02@gmail.com");
    await $("//input[@id='password']").setValue("hieu123456");
    await $("//span[text()='Login']//parent::button[@type='submit']").click();
    await browser.pause(1000);
    const iconAfterLogin = "//div[@class='ant-dropdown-trigger dropdown-user']";
    await $(iconAfterLogin).isDisplayed();
    await browser.maximizeWindow();
    await browser.pause(1000);

    //display Hints, Tips & Story
    await $("//div[text()='Hints, Tips & Stories']//parent::a").click();
    await browser.pause(1000);
    await expect(browser).toHaveTitleContaining(
      "Parenting Tips & Stories for Raising Kids"
    );

    //Media
    await $("//div[text()='Media']//parent::a").click();
    await browser.pause(1000);
    await expect(browser).toHaveTitleContaining("Media");

    //Award
    await $("//div[text()='Awards']//parent::a").click();
    await browser.pause(1000);
    await expect(browser).toHaveTitleContaining(
      "Australia Childcare Centre Ratings"
    );

    //About Us
    await $("//div[text()='About Us']//parent::a").click();
    await browser.pause(1000);
    await expect(browser).toHaveTitleContaining("About Us");

    // Kindicare Subsidy Caculcaltor
    //   await $("//div[@class='ant-menu-submenu-title']//span[@class='anticon anticon-ellipsis']").click();
    //   await browser.pause(3000);
    //   await $("//span[@class='ant-menu-title-content']//div[contains(text(),'KindiCare Subsidy Calculator')]").click();
    //   await browser.pause(3000);
    //   await expect(browser).toHaveTitleContaining("Child Care Subsidy Calculator");

    // Search
    await $("//div[text()='Search']//parent::a").click();
    await browser.pause(1000);
    await expect(browser).toHaveTitleContaining(
      "Find and Compare Child Care Centres Nearby"
    );

    // For Childcare Providers
    await $(
      "//span[@class='ant-radio-button']//following-sibling::span[contains(text(),'For Childcare Providers')]"
    ).click();
    await browser.pause(1000);
    await expect(browser).toHaveTitleContaining(
      "CRM Management Software for Childcare Providers"
    );

    // For Parents & Families
    await $("//span[text()='For Parents & Families']").click();
    await browser.pause(1000);
    await expect(browser).toHaveTitleContaining(
      "Find and Compare Child Care Centres Nearby"
    );

    // View All Brand
    const viewAllBrand="//div[text()='Search by Brand']//ancestor::div[@class='feature-title__title-wrapper']//following-sibling::div//a[text()='View all']";
    // await viewAllBrand.scrollIntoView();
    await $(viewAllBrand).click();
    await browser.pause(1000);
    await expect(browser).toHaveTitleContaining(
      "Top Featured Childcare Centres Searched by Brand"
    );
    await browser.back();
    await browser.pause(6000);

    // const title ="//div[@class='subsidy-calculator__title']";
    // await $(title ).isDisplayed();
    // await title.scrollIntoView();

    // View all childcare nearby


    const childcareNearby =
    "//div[text()='Childcare Nearby']//ancestor::div[@class='feature-title__bottom d-flex justify-content-between']//a[text()='View all']";
    await $(childcareNearby ).isDisplayed();

    browser.execute(elem => elem.scrollIntoView(), childcareNearby);
    
    await $(childcareNearby).click();
    await browser.pause(3000);
    await expect(browser).toHaveTitleContaining(
      "Find Childcare Centres  & Early Learning Services Near You"
    );
    await browser.back();
    await browser.pause(3000);
  });
});
