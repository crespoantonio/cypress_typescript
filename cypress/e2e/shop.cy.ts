///<reference types="cypress"/>

import { homePage } from "../pages/home.page";
import { shopPage } from "../pages/shop.page";

describe('SHOP', function () {
    const from:number = 280;
    const to:number = 428;

    beforeEach(function () {
      cy.visit('/');
      homePage.clickShopMenu();
    });
  
    it('Filter by price between 280 and 428', function () {
        shopPage.filterByPrice(from, to);
        shopPage.getFromPriceLabel().should('include.text', from)
        shopPage.getToPriceLabel().should('include.text', to);
        shopPage.clickFilterButton();
        shopPage.priceOfProductsInRange(from, to);
    });
});