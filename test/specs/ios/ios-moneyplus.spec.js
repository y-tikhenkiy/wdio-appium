import Application from '../../screenobjects/ios/index.js'

describe('Money Plus app', ()=>{

    let app = new Application();
    beforeEach( ()=>{
        driver.activateApp(process.env.BUNDLE_ID);
    })
    afterEach(()=>{
        driver.terminateApp(process.env.BUNDLE_ID);
    })

    it("add Income trasnaction", async() =>{

        const title = app.newPayment.title;
        const amount = app.newPayment.transactionAmount;
        const paymentDetail = app.newPayment.transactionDetails;

        //Create transaction item
        await app.mainScreen.addItem.click();
        await app.newPayment.fillPaymentTitle(title);
        await app.newPayment.paymentValueInput.setValue(amount);
        await app.newPayment.paymentDateInput.setValue(app.newPayment.dateNDaysAgo(4));
        await app.newPayment.incomeButton.click();
        await app.newPayment.detailInput.setValue(paymentDetail);
        await app.newPayment.saveButton.click();
    
        //Assertion main screen
        await expect(await app.mainScreen.getByAtrribute(title)).toBeExisting();            // payment title displayed
        await expect(await app.mainScreen.getByAtrribute(`＋$${amount}`)).toBeExisting();   // payment amount displayed
        await expect(await app.mainScreen.getByAtrribute('30 June 2024')).toBeExisting();   // payment date displayed

        // //View transaction item details
        await app.mainScreen.transactionTitle(title).click();
        
        // //Assertion payment details screen
        await expect(await app.mainScreen.getByAtrribute(title)).toBeExisting();                                 // payment title displayed
        await expect(await app.mainScreen.getByAtrribute(`＋$${amount}`)).toBeExisting();                        // payment amount displayed
        await expect(await app.mainScreen.getByAtrribute(app.newPayment.dateNDaysAgo(4))).toBeExisting();     // payment date displayed
        await expect(await app.mainScreen.getByAtrribute(paymentDetail)).toBeExisting();                         // payment details

    })

    it("add Expense trasnaction", async() =>{

        const title = app.newPayment.title;
        const amount = app.newPayment.transactionAmount;
        const paymentDetail = app.newPayment.transactionDetails;
        
        //Create transaction item
        await app.mainScreen.addItem.click();
        await app.newPayment.fillPaymentTitle(title);
        await app.newPayment.paymentValueInput.setValue(amount);
        await app.newPayment.paymentDateInput.setValue(app.newPayment.dateNDaysAgo(4));
        await app.newPayment.expenseButton.click();
        await app.newPayment.detailInput.setValue(paymentDetail);
        await app.newPayment.saveButton.click();

        //Assertion main screen
        await expect(await app.mainScreen.getByAtrribute(title)).toBeExisting();            // payment title displayed
        await expect(await app.mainScreen.getByAtrribute(`ー$${amount}`)).toBeExisting();   // payment amount displayed
        await expect(await app.mainScreen.getByAtrribute('30 June 2024')).toBeExisting();   // payment date displayed

        // //View transaction item details
        await app.mainScreen.transactionTitle(title).click();
        
        // //Assertion payment details screen
        await expect(await app.mainScreen.getByAtrribute(title)).toBeExisting();                                 // payment title displayed
        await expect(await app.mainScreen.getByAtrribute(`ー$${amount}`)).toBeExisting();                        // payment amount displayed
        await expect(await app.mainScreen.getByAtrribute(app.newPayment.dateNDaysAgo(4))).toBeExisting();     // payment date displayed
        await expect(await app.mainScreen.getByAtrribute(paymentDetail)).toBeExisting();                         // payment details
        
    })

})