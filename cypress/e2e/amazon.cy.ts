import { contains } from "cypress/types/jquery";
import {
    RobotEyes,
    RobotHands,
    Dependencies,
  } from "../robot/amazon/Robot";

  context("End to End Testing", () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();
  
    beforeEach(() => {
      cy.viewport(1905, 980);
      robotHands.wait(2000);
    });
    describe("Amazon testing", () => {
          it("testing without login", () => {
         dependencies.visitAmazon();
        robotHands.todaysDeal();
        robotHands.clickOnItems();
        robotHands.wait(1000);
        robotHands.search();
        robotHands.scrollBottom();
        robotHands.gettingTheLastMobile();
        robotHands.wait(1000);
        robotHands.navToMenu();
        });
    });
    describe("Amazon prime testing", () => {
      it("testing with login", () => {
       robotHands.signIn();
      dependencies.credentials();
      robotHands.displayItem();
      robotHands.updateAddress();
      dependencies.Address()
      robotHands.wait(2000)
      robotHands.save()
      robotEyes.assertingAddress()
      robotHands.updatePaymentMethod();
      robotEyes.assertingPayment();
     
    });
    });
    
      });

