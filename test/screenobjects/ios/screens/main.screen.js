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

}