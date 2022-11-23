const SignInPage = require('../pageobjects/signin');
const ProductPage = require('../pageobjects/product.page');
const ViewCartPage = require('../pageobjects/viewcart');
const ShipmentPage = require('../pageobjects/shipment.page');
const PlaceOrderPage = require('../pageobjects/placeorder');

describe('Checkout Process Flow', () => {

    it('should select a product to checkout', async () => {
        await SignInPage.open();
        await SignInPage.signin("jbaker4@gmail.com", "Abcd1234!");

        await ProductPage.open();
        await ProductPage.addToCart();
        await expect(ProductPage.successMsg).toBeExisting();
        await ViewCartPage.cartBtn.click();
        await expect(ViewCartPage.proceedToCheckoutBtn).toBeExisting();
        await ViewCartPage.proceedToCheckoutBtn.click();
    
        let addNew = ShipmentPage.addNewShipBtn.isExisting();
        if (addNew == false) {
            await ShipmentPage.checkout('jane', 'doe', '123 abc road', 'barbican', 'kingston 6',
                'kings', '12', '18765', 'JM', '9998765423');
        }
        else {
            await ShipmentPage.addNewShipBtn.click();
            await ShipmentPage.checkout('jane', 'doe', '123 abc road', 'barbican', 'kingston 6',
                'kings', '12', '18765', 'JM', '9998765423');
            await ShipmentPage.btnShipHere.click();
        }    
        await ShipmentPage.flatRateRadioBtn.click();
        await ShipmentPage.checkoutNextBtn.click();
        await PlaceOrderPage.placeOrderBtn.click();
        await expect(PlaceOrderPage.orderSuccessMsg).toHaveTextContaining('Thank you for your purchase', { ignoreCase: true });
    })

    it('should verify the product purchase', async () => {
        await PlaceOrderPage.orderNumberLink.click();
        await expect(PlaceOrderPage.orderPageTitle).toBeExisting();
        await expect(PlaceOrderPage.orderPageTitle).toHaveTextContaining('Order #');
    })
})