const Page = require('./page');

class ProductPage extends Page {
//methods and selectors to get the product

get selectProduct () {
    return $('img[alt="Leah Yoga Top"]');
}

get selectProductSize () {
    return $('#option-label-size-143-item-167');
}

get selectProductColour () {
    return $('#option-label-color-93-item-59');
}

get clickAddToCartBtn () {
    return $('#product-addtocart-button');
}

get successMsg () {
    return $(".message-success.success.message")
}

async addToCart () {
    await this.selectProduct.click();
    await this.selectProductSize.click();
    await this.selectProductColour.click();
    await this.clickAddToCartBtn.click();

}

open () {
        return super.open('women/tops-women.html');
    }
}

module.exports = new ProductPage();