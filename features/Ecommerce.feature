Feature: Ecommerce validation

    @Regression
  Scenario Outline: Placing the order

    Given I login to the application with usrename "<username>" and password "<password>"   
    When Add '<productName>' to the cart
    Then Verify '<productName>' is displayed in the cart
    When Enter valid details and place the order
    Then Verify the order is displayed in Order history with the product name '<productName>'
    
    Examples:
      | username                     | password   | productName  |
      | automationpractice1@gmail.com | Test@1234 | ZARA COAT 2 |   
      | anshika@gmail.com | Iamking@000 | ADIDAS ORIGINAL |


       @Regression
  Scenario Outline: Placing the order

    Given I login to the application with usrename "<username>" and password "<password>"   
    When Add '<productName>' to the cart
    Then Verify '<productName>' is displayed in the cart
    When Enter valid details and place the order
    Then Verify the order is displayed in Order history with the product name '<productName>'
    
    Examples:
      | username                     | password   | productName  |
      | automationpractice1@gmail.com | Test@1234 | ZARA COAT 3 |   
      | anshika@gmail.com | Iamking@000 | ADIDAS ORIGINAL |