Feature: user can apply jobs By using the Kerv Application

  Scenario: 
    Given user launch  kerv Application by using url
    When then user handle the Cookies in the kerv Application

  Scenario: 
    When user move the Curser in Careers Element
    Then the Click the Job Opportunities  the page Will be navigate on the Job Opportunities page

  Scenario Outline: 
    When user Select the Work location
    And user Select the Working Type
    And user Select the Worikng option
    And user get The list on the job Displayed then print the value in console
    And user Enter the preferred role on the vacancies "<Field>" 
    And user Click Search icon button
    And then it will show only preferred roles only
 

    Examples: 
      | Field |
      | Senior Test Engineer|

  Scenario Outline: 
    When user Enter the "<firstname>" in the Firstname Field
    And user Enter the "<lastname>" in the Lastname Field
    And user Enter the "<email>" in the Email Field
    And user Enter the "<phonenumber>" in the PhoneNumber Field
    And user upload the resume in the Resume Field
    And user Enter  the "<noticePeriod>" in the NoticePerid Field
    Then user click the Submit button

    Examples: 
      | firstname | lastname | email | phonenumber | noticePeriod |
      |PannerSelvam |p|selvamtechie@outlook.com|9445621808|15 days|
