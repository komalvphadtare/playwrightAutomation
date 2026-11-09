Feature: Invalid Login

    @Validation
    Scenario: Invalid Login
        Given I login to the application with usrename "automationpractice1@gmail.com" and invalid password "Test@12345"
        Then Verify the error message is displayed "Incorrect email or password."
