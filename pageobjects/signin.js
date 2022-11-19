const Page = require('./page');

class SignInPage extends Page {
//methods and selectors for sign in page

get inputUsername () {
    return $('input[name="login[username]"]');
}

get inputPassword () {
    return $('(//input[@id="pass"])[1]');

}

get signInBtn () {
    return $('button[class="action login primary"]');
}

//method to automate logging in a customer

async signin (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.signInBtn.click();
}

open () {
        return super.open('customer/account/login');
    }
}

module.exports = new SignInPage();