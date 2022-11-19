const ProductPage = require('../pageobjects/product.page');

describe.skip ('Add to Cart', () => {

    it('should add a product to the cart', async () => {
        await ProductPage.open();
        await ProductPage.addToCart();
        await expect(ProductPage.successMsg).toBeExisting();
        await expect(ProductPage.successMsg).toHaveTextContaining('You added', {ignoreCase:true});

    })
})