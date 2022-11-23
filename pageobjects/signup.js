const Page = require('./page');

class SignUpPage extends Page {
    //methods and selectors for sign up page

    get inputFirstName() {
        return $('#firstname');
    }

    get inputLastName() {
        return $('#lastname');
    }

    get newsletter() {
        return $('#is_subscribed');
    }

    get inputEmail() {
        return $('#email_address');
    }

    get inputPassword() {
        return $('#password');
    }

    get inputConfirmPassword() {
        return $('#password-confirmation');
    }

    get registerBtn() {
        return $('button[title="Create an Account"]');
    }

    get successMsg() {
        return $(".message-success.success.message");
    }

    get fNameError() {
        return $('#firstname-error');
    }

    get lNameError() {
        return $('#lastname-error');
    }

    get emailError() {
        return $('#email_address-error');
    }

    async signup(userFname, userLname, emailAddress, userPassword, confirmPassword) {

        await this.inputFirstName.setValue(userFname);
        await this.inputLastName.setValue(userLname);
        await this.newsletter.click();
        await this.inputEmail.setValue(emailAddress);
        await this.inputPassword.setValue(userPassword);
        await this.inputConfirmPassword.setValue(confirmPassword);
        await this.registerBtn.click();
    }


    open() {
        return super.open('customer/account/create');
    }
}

module.exports = new SignUpPage();