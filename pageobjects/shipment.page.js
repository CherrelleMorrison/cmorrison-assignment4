
const Page = require('./page');

class ShipmentPage extends Page {

get shippingFirstName () {
    return $('input[name="firstname"]');
}

get shippingLastName () {
    return $('input[name="lastname"]');
}

get streetAddress1 () {
    return $('input[name="street[0]"]');
}

get streetAddress2 () {
    return $('input[name="street[1]"]');
}

get streetAddress3 () {
    return $('input[name="street[2]"]');
}

get addressCity () {
    return $('input[name="city"]');
}

get addressState () {
    return $('select[name="region_id"]');
}

get addressPostal () {
    return $('input[name="postcode"]');
}

get addressCountry () {
    return $('select[name="country_id"]');
}

get inputTelephone () {
    return $('input[name="telephone"]');
}

get flatRateRadioBtn () {
    return $('input[value="flatrate_flatrate"]');
}

get bestRateRadioBtn () {
    return $('input[value="tablerate_bestway"]');
}

get checkoutNextBtn () {
    return $('.button.action.continue.primary');
}


async checkout (shipFname, shipLname, address1, address2, address3, city, state, zipcode, country, phone) 
{
    await this.shippingFirstName.setValue(shipFname);
    await this.shippingLastName.setValue(shipLname);
    await this.streetAddress1.setValue(address1);
    await this.streetAddress2.setValue(address2);
    await this.streetAddress3.setValue(address3);
    await this.addressCity.setValue(city);
    await this.addressState.selectByAttribute("value",state);
    await this.addressPostal.setValue(zipcode);
    await this.addressCountry.selectByAttribute("value", country);
    await this.inputTelephone.setValue(phone);
  
}

open () {
    return super.open('checkout/#shipping');
}

}

module.exports = new ShipmentPage();