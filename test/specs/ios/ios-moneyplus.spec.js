import Application from '../../screenobjects/ios/index.js'

describe('Money Plus app', ()=>{
    ita("add Income trasnaction", async() =>{
        
        const app = new Application();
        const title = app.newPayment.title;
        const amount = app.newPayment.transactionAmount;
        //Create transaction item
        await app.mainScreen.addItem.click();
        await app.newPayment.fillPaymentTitle(title);
        await app.newPayment.paymentValueInput.setValue(amount);
        await app.newPayment.paymentDateInput.setValue(app.newPayment.dateNDaysAgo(4));
        await app.newPayment.incomeButton.click();
        await app.newPayment.detailInput.setValue("for the June 2024");
        await app.newPayment.saveButton.click();
    
        //Assertion
        await expect(await $(`~${title}`)).toBeExisting();
        await expect(await $(`~＋$${amount}`)).toBeExisting();
        await expect(await $("~28 June 2024")).toBeExisting();

        //View transaction item details
        await app.mainScreen.transactionTitle(title).click();
        
        //Assertion
        await expect(await $(`//*[@value="${title}"]`)).toBeExisting();
        await expect(await $(`~${app.newPayment.dateNDaysAgo(4)}`)).toBeExisting();
        await expect(await $(`//*[@value="＋$${amount}"]`)).toBeExisting();
        await expect(await $('//*[@value="for the June 2024"]')).toBeExisting();

    })

})