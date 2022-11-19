
class PlaceOrderPage {

get placeOrderBtn () 
{
    return $('button[title="Place Order"]');
}

 get orderSuccessMsg () 
 {
    return $('h1 span[data-ui-id$="page-title-wrapper"]');
 }

 get orderNumberLink () 
 {
    return $('a[class="order-number"]');

 }

 get orderPageTitle () 
 {
    return $('#maincontent h1 > span');
 }

//  get orderTitle () 
//  {
//     return $('');
//  }

// async storeOrderNumber ()
// {
//     await this.orderNumberLink.getValue();

// }

}

module.exports = new PlaceOrderPage();