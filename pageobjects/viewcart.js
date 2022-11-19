
const Page = require('./page');


class ViewCartPage extends Page{
//methods and selectors for checkout

get cartBtn () {
    return $('.action.showcart');
}

// get viewCart () {
//     return $(".action.viewcart");
// }

get proceedToCheckoutBtn () {
    return $('#top-cart-btn-checkout');
}


open () {
    return super.open('leah-yoga-top.html');
}

}

module.exports = new ViewCartPage();