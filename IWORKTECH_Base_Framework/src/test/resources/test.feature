Feature: As a user I want to add the product in to the basket from the PLP page

  Scenario: Add the product into the basket and verify if its getting added
    When user is on the site
    Then the added product "<product name>" should be successfully getting added into the basket
    And sdsd

