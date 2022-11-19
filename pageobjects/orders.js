

class OrderHistoryPage {

    get menuToggle () 
    {
        return $('div[class="panel header"] button');
    }
    
     get accountMenu () 
     {
        return $('(//a[normalize-space()="My Account"])[1]');
    
     }

     get ordersList () 
     {
        return $('#maincontent li:nth-child(2) a:nth-child(1)');
     }

     get pageTitle () {
        return $('#maincontent h1 > span');
     }

     async navToMyAccount ()
     {
        await this.menuToggle.click();
        await this.accountMenu.click();
     }
     
    
    }
    
    module.exports = new OrderHistoryPage();