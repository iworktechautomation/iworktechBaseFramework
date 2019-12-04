@regression
Feature: As a user I want to add the product in to the basket from the PLP page

  Background: This steps will be executed for the features mentioned below
    Given user is on the Halfords site

  Scenario Outline: Add the product into the basket and verify if its getting added

    When user moves to the header "<header>"
    And clicks on the category "<category>"
    And add the product "<product name>" into the basket
    Then the added product "<product name>" should be successfully getting added into the basket
    Examples:

      | header   | category  | registration number | product name                 | filtering criteria |
      | Motoring | Car Bulbs | OV02AOR             | Halfords 477 H7 Car Bulb x 1 | Bosch              |

 # Scenario Outline: Check if all the added products are present in the basket.

 #  When user moves to the header "<header>"
 #   And clicks on the category "<category>"
 #   And add the product "<product name>" into the basket
#    Then all the added product "<product name>" should be present in the basket
#
 #   Examples:

 #     | header   | category  | registration number | product name                  | filtering criteria |
 #     | Motoring | Car Bulbs | OV02AOR             | Halfords 477 H7 Car Bulb x 1  | Bosch              |
 #     | Motoring | Car Bulbs | OV02AOR             | Halfords Spare Bulb Kit No.18 | Bosch              |
