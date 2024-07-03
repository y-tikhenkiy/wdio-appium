import NewPaymentScreen from "./screens/new-payment.screen.js"
import MainScreen from "./screens/main.screen.js";

export default class Application {
    newPayment = new NewPaymentScreen();
    mainScreen = new MainScreen();
}

