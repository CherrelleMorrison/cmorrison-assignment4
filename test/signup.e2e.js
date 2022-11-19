const SignUpPage = require('../pageobjects/signUp');

describe.skip('Customer sign up', () => {

    it('should sign up with a completed form', async () => {
        await SignUpPage.open();

        await SignUpPage.signup('billy10', 'bob', 'bob10@mail.com', 'Abcd1234!', 'Abcd1234!');
        await expect(SignUpPage.successMsg).toHaveTextContaining('Thank you for registering', {ignoreCase:true});

    })
})