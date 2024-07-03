describe('iOS Find Element', ()=>{
    it.only('find element by accessibility ID', async () =>{
        // await $('~Alert Views').click();
        // await $('~Simple').click();

        // await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    })
    
    it('find by tag name', async () =>{
        // single element
        console.log(await $('XCUIElementTypeStaticText').getText());

        // multiple elements
        const textEls = await $$('XCUIElementTypeStaticText');

        for (const element of textEls) {
            console.log(await element.getText());
        }
    })

    it('find element by xpath', async () =>{
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
        await $('//*[@name="Alert Views"]').click();
        await $('//*[@label ="Simple"]').click();

        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    })

    it('find element by class chain', async () =>{
        const alertText = '**/XCUIElementTypeStaticText[`name == "Alert Views"`]';
        
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label ="Simple"]').click();

        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    })

    it('find element by predicate string', async () =>{
        // const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "alert"';
        
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label ="Simple"]').click();

        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");

    })

    it.only('exercise - default search bar', async () =>{
        // const alertText = 'label == "Alert Views"';
        // const alertText = 'value BEGINSWITH[c] "alert"';
        const searchMenu = 'name == "Search"';
        const defaultMenu = 'name == "Default"';
        const searchBar = 'type == "XCUIElementTypeSearchField"';



        await $(`-ios predicate string:${searchMenu}`).click();
        await $(`-ios predicate string:${defaultMenu}`).click();
        await $(`-ios predicate string:${searchBar}`).setValue('Hello world');
        await $('~Clear text').click();
        const value = await $(`-ios predicate string:${searchBar}`).getText();

        // await expect($(`-ios predicate string:${searchBar}`)).not.toHaveAttr("value");
        await expect(value).toEqual("");

    })



})