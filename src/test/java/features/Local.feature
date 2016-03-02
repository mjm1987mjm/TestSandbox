@demo
Feature: Going to nu.nl. Accept cookies. Navigate to the TV Guide and then click on primetime

  Background:
    Given   User is on landing page

  @demo
  Scenario:test1
    And Agree Cookies
    And Navigate to TV guide
    Then Navigate to Primetime