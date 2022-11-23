
const Page = require('./page');


class ViewCartPage extends Page {
    
    get cartBtn() {
        return $('.action.showcart');
    }
    get proceedToCheckoutBtn() {
        return $('#top-cart-btn-checkout');
    }


    open() {
        return super.open('leah-yoga-top.html');
    }

}

module.exports = new ViewCartPage();