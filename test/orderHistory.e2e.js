const SignInPage = require('../pageobjects/signin');
const OrderHistoryPage = require('../pageobjects/orders');
const PlaceOrderPage = require('../pageobjects/placeorder');


describe.skip('Purchase History', () => {
    it('should navigate to the order history list', async () => {
        await SignInPage.open();
        await SignInPage.signin('bob3@mail.com', 'Abcd1234!');

        await OrderHistoryPage.navToMyAccount();
        await expect(OrderHistoryPage.pageTitle).toHaveTextContaining('Account');

        await expect(OrderHistoryPage.ordersList).toBeExisting();
        await OrderHistoryPage.ordersList.click();
        await expect(OrderHistoryPage.pageTitle).toHaveTextContaining('My Orders');
    })

   
})
