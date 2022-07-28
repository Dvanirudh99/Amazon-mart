import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitAmazon(){
        this.accessUrl('https://www.amazon.in/ref=nav_logo');
    }
    credentials(){
        this.amazonLogin("ap_email","continue","ap_password","signInSubmit");
       }
    Address(){
        this.addAddress("address-ui-widgets-enterAddressFullName","address-ui-widgets-enterAddressPhoneNumber","address-ui-widgets-enterAddressPostalCode","address-ui-widgets-enterAddressLine1","address-ui-widgets-enterAddressLine2","address-ui-widgets-landmark","address-ui-widgets-form-submit-button")
        }
   
}

export class RobotEyes extends BaseEyes{
   
        assertingAddress(){
            this.seesTextWithClass("a-alert-heading","You have submitted an address that is already in your address book")
            
        }
        assertingPayment(){
            this.seesDomVisibleWithCustomMatcher("class","'a-button a-button-base apx-secure-registration-content-trigger-js'")
        }
}

export class RobotHands extends BaseHands{

    todaysDeal(){
        this.clickOnText("Today's Deals");
    }
    clickOnItems(){
    
        // this.clickOnDomElement('[data-testid="grid-deals-container"] > :nth-child(2)')
        // this.clickOnChildDomElementWithIndex('[class = "DealGridItem-module__dealItemDisplayGrid_e7RQVFWSOrwXBX4i24Tqg DealGridItem-module__withBorders_2jNNLI6U1oDls7Ten3Dttl DealGridItem-module__withoutActionButton_2OI8DAanWNRCagYDL2iIqN"]',1)
         this.clickOnChildDomElementWithIndex('div[class = "DealGridItem-module__dealItemDisplayGrid_e7RQVFWSOrwXBX4i24Tqg DealGridItem-module__withBorders_2jNNLI6U1oDls7Ten3Dttl DealGridItem-module__withoutActionButton_2OI8DAanWNRCagYDL2iIqN"]',3)
    }
   

search(){
  this.typeTextonId("twotabsearchtextbox","mobiles")
  this.clickOnId("nav-search-submit-button")
}

scrollBottom(){
this.scrollWithClass('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]',21);
}

gettingTheLastMobile(){
//     this.clickOnChildDomElementWithIndex("[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]',18);
this.clickOnChildDomElementWithIndex('[class = "a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]',21)
 }

navToMenu() {
    this.clickOnId('nav-hamburger-menu');
//    this.clickOnDomElement('[data-ref-tag="nav_em_1_1_1_13"]');
   this.clickOnText('Mobiles, Computers')
    
 this.clickOnDomElement("ul[class='hmenu hmenu-visible hmenu-translateX'] a[aria-label='Back to main menu'] div");
    
     }
signIn() {

    // this.clickOnId("nav-link-accountList");
    cy.get('#hmenu-customer-profile').click();
}
displayItem() {
    this.clickOnId("nav-link-accountList");

this.clickOnText("Your Orders")
// this.clickOnDomElement("[class ='.a-row.a-size-base.yohtmlc-order-level-connections'] a");
this.clickOnText("View order details");

}
updateAddress(){
    this.clickOnText("Your Account");
    this.clickOnText("Your Addresses");
    cy.get('#ya-myab-plus-address-icon').click()
    }
save(){
    cy.get('#a-autoid-2 > .a-button-inner > .a-button-input').click()
}
   

updatePaymentMethod(){
    this.clickOnText("Your Account");
    this.clickOnText("Payment options");
    

}
}