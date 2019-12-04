Feature: Guest Checkout
  As a Customer
  I want to be able to navigate through checkout as a guest
  So that I can proceed with placing my order

  @valid @regression @testlocal
  Scenario: Check if the entered user details at the your personal details section are populating in the Delivery section
    When I fill user details with the below data
      | Title | First Name | Last Name | Email   | Password |
      | Mr    | Test       | Tester    | a@a.com | password |
    And I click on Continue to delivery button
    And I click on Delivery Radio Button
    Then I should see the delivery details pre-populated with the user information entered on the your personal details section
