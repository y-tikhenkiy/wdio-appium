import Application from '../../screenobjects/ios/index.js'

const app = new Application();

describe('Money Plus app', ()=>{
    it("swipe trasnaction to the right and delete ", async() =>{
        const titles = [];
        
        for(let i=0; i<3;i++){       
            const paymentTitle = `${app.newPayment.title} - ${Date.now()}`;
            titles.push(paymentTitle);

            await app.mainScreen.addItem.click();
            await app.newPayment.fillPaymentTitle(paymentTitle);
            await app.newPayment.paymentValueInput.setValue(app.newPayment.transactionAmount);
            await app.newPayment.paymentDateInput.setValue(app.newPayment.dateNDaysAgo(4));
            await app.newPayment.incomeButton.click();
            await app.newPayment.detailInput.setValue(app.newPayment.transactionDetails);
            await app.newPayment.saveButton.click();
        }

        const randomIndex = Math.floor(Math.random() * titles.length);
        const paymentToDelete = titles[randomIndex];

        await app.mainScreen.swipeRight(driver, `~${paymentToDelete}`)
        await $('~trash').click();

        await expect(await app.mainScreen.isDisplayed(`~${paymentToDelete}`)).toBe(false);
    })

})