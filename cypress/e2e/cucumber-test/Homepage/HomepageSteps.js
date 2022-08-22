import {Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

const Homepage = require ('../../../support/pages/Homepage');
let homepage = new Homepage();


Given(/^I open fairprice web$/, ()=>{
    homepage.visit('/');
})

When(/^I navigate to promotion page$/,()=>{
    homepage.promo_page();
})

Then(/^I can see the ([\w\s]+), ([\w\s]+), and ([\w\s]+) category tab$/,(promo1, promo2, promo3)=>{
    homepage.check_tab(promo1);
    homepage.check_tab(promo2);
    homepage.check_tab(promo3);
})

Then(/^I cannot see the ([\w\s]+), ([\w\s]+), and ([\w\s]+) category tab$/,(promo1, promo2, promo3)=>{
    homepage.invalid_check_tab(promo1);
    homepage.invalid_check_tab(promo2);
    homepage.invalid_check_tab(promo3);
})

Given(/^I am in promotion page$/, ()=>{
    homepage.visit_promo_page('https://www.fairprice.com.sg/promotions');
})

And(/^I click on ([\w\s]+) tab$/,(promoTag)=>{
    homepage.promo_click(promoTag);
})

Then(/^I can see all product have ([\w\s]+) badge$/,(promoTag)=>{
    homepage.check_badge(promoTag);
})

Then(/^I cannot see a product with (.+) badge on PWP page$/,(promoTag)=>{
    homepage.invalid_check_badge(promoTag);
})