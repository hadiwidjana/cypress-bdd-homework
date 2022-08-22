Feature: Fairprice promo tag test scenarios

        @PromoCategory @Positive
        Scenario: [positive] I want to see the mandatory promo category tab
            Given I open fairprice web
            When I navigate to promotion page
            Then I can see the PWP, Weekly Deals, and Digital Club Exclusive category tab

        @PromoCategory @PwpTag @Positive
        Scenario: [positive] I want all product tagged in PWP have PWP badge
            Given I am in promotion page
            When I click on PWP tab
            Then I can see all product have PWP badge

        @PromoCategory @Negative
        Scenario Outline: [negative] I want no other invalid promo label to be shown
            Given I open fairprice web
            When I navigate to promotion page
            Then I cannot see the <promo1>, <promo2>, and <promo3> category tab
        Examples:
            | promo1            | promo2        | promo3        |
            | Buy one get one   | Half price    | Crazy deal    |
            | Not for sale      | Christmas sale| Obral         |

        @PromoCategory @PwpTag @Negative
        Scenario Outline: [negative] I want product with invalid badge to not available on PWP tagged page
            Given I am in promotion page
            When I click on PWP tab
            Then I cannot see a product with <label> badge on PWP page
        Examples:
            | label |
            | free  |
            | 20%   |