import {faker} from '@faker-js/faker';

export default class NewPaymentScreen{

    get title() {
        return faker.finance.transactionType();
    }

    get transactionAmount(){
        return faker.finance.amount();
    }

    get transactionDetails(){
        return faker.commerce.productName();
    }

    get paymentTitleInput(){
        return $('//*[@value="Enter your payment"]');
    }

    get paymentValueInput(){
        return $('//*[@value="0.0"]');
    }

    dateNDaysAgo(n){
        const currentDate = new Date();

        currentDate.setDate(currentDate.getUTCDate() - n);

        const day = String(currentDate.getUTCDate()).padStart(2, '0');
        const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); 
        const year = currentDate.getUTCFullYear();

        return `${day}/${month}/${year}`;
    }

    get currentDateValue(){
        const currentDate = new Date();

        const day = String(currentDate.getUTCDate()).padStart(2, '0');
        const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); 
        const year = currentDate.getUTCFullYear();

        return `${day}/${month}/${year}`;
    }

    get paymentDateInput(){
        return $(`//*[@value="${this.currentDateValue}"]`);
    }

    get incomeButton() {
        return $("~INCOME");
    }

    get detailInput(){
        return $('//*[@value="Your personal note"]');
    }

    get saveButton() {
        return $('//*[@name="SAVE"]');
    }

    async fillPaymentTitle(title){
        await this.paymentTitleInput.setValue(title);
    }
}

