const locator = require ('../locator/HomepageLocator');

class Homepage {

    async visit(path){
        cy.visit(path).wait(1000);
        return cy.url().should('eq', 'https://www.fairprice.com.sg/');
    }

    async promo_page(){
        cy.get(locator.datatestid.promo_btn).click();
        return cy.url().should('eq', 'https://www.fairprice.com.sg/promotions');
    }

    async check_tab(promoTag){
        //convert space to dash and all lowercase
        let convertTag = promoTag.replace(/\s+/g, '-').toLowerCase();
        return cy.get(locator.datatestid.promo_tab).children(`[data-testid="tagOption-${convertTag}"]`).should('have.text', promoTag);
    }

    async invalid_check_tab(promoTag){
        return cy.get(locator.datatestid.promo_tab).contains(promoTag).should('not.exist');
    }

    async visit_promo_page(path){
        cy.visit(path).wait(1000);
        return cy.url().should('eq','https://www.fairprice.com.sg/promotions');
    }


    async promo_click(promoTag){
        //convert space to dash and all lowercase
        let convertTag = promoTag.replace(/\s+/g, '-').toLowerCase();
        cy.get(`[data-testid="tagOption-${convertTag}"]`).click();
        return cy.url().should('eq', `https://www.fairprice.com.sg/promotions?tag=${convertTag}`);
    }

    async check_badge(promoTag){
        return cy.get(locator.datatestid.badge_loc).each(($tagName) => {
            expect($tagName.text()).equal(promoTag);
        });
        
    }

    async invalid_check_badge(promoTag){
        return cy.get(locator.datatestid.badge_loc).each(($tagName) => {
            expect($tagName.text()).not.equal(promoTag);
        });
    }

}


module.exports = Homepage;