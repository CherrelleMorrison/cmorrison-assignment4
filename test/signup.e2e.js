const SignUpPage = require('../pageobjects/signUp');
const signupData = require('./data/signupData')

describe('Customer sign using data driven method', () => {

for(const record of signupData){

    it('loads sign up page and inputs sign up data from a file', async () =>{
        await SignUpPage.open();
        await SignUpPage.signup(record.userFname, record.userLname, record.emailAddress, record.userPassword, record.confirmPassword);
    })
        if (record.userFname == "") {
            it('should not sign up with an empty first name field', async () => {
                await expect(SignUpPage.fNameError).toHaveUrlContaining('account/create');
                await expect(SignUpPage.fNameError).toHaveTextContaining("This is a required field", {ignoreCase: true});
            })
        }

        else if (record.userLname == "") {
            it('should not sign up with an empty last name field', async () => {
                await expect(SignUpPage.lNameError).toHaveUrlContaining('account/create');
                await expect(SignUpPage.lNameError).toHaveTextContaining("This is a required field", {ignoreCase: true}); 
            })
        }
        else if (record.emailAddress == ""){
            it('should not sign up with an empty email address field', async () => {
                await expect(SignUpPage.emailError).toHaveUrlContaining('account/create');
                await expect(SignUpPage.emailError).toHaveTextContaining("This is a required field", {ignoreCase: true});
            })
        }
        else {
            it('should sign up with a completed form using data from a file', async () => {
                await expect(SignUpPage.successMsg).toHaveTextContaining('Thank you for registering', {ignoreCase:true});
            })
        }   
}
})