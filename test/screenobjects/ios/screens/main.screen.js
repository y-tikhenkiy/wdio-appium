export default class MainScreen{
    get addItem(){
        return $("~Item");
    }

    transactionTitle(name){
        return $(`~${name}`);
    }

    getByAtrribute(name){
        return $(`//*[@value="${name}"]`);
    }

    async swipeRight(driver, elementSelector) {
        const element = await $(elementSelector);
        const rect = await element.getLocation();
        const size = await element.getSize();
        
        const startX = rect.x + (size.width*0.2);
        const endX = rect.x + (size.width*0.8);
        const startY = rect.y + (size.height/2);

        await driver.execute('mobile: swipe', {
            direction: 'right',
            elementId: element.elementId,
            startX: startX,
            startY: startY,
            endx: endX,
            endY: startY
        })
    }

    async isDisplayed(elementSelector) {
        return await $(elementSelector).isDisplayed();
    }
    
}