$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/KervFeatures/KervFile.feature");
formatter.feature({
  "line": 1,
  "name": "user can apply jobs By using the Kerv Application",
  "description": "",
  "id": "user-can-apply-jobs-by-using-the-kerv-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "user-can-apply-jobs-by-using-the-kerv-application;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launch  kerv Application by using url",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "then user handle the Cookies in the kerv Application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFile.user_launch_kerv_Application_by_using_url()"
});
formatter.result({
  "duration": 5604450101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFile.then_user_handle_the_Cookies_in_the_kerv_Application()"
});
formatter.result({
  "duration": 5236970801,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "",
  "description": "",
  "id": "user-can-apply-jobs-by-using-the-kerv-application;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user move the Curser in Careers Element",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the Click the Job Opportunities  the page Will be navigate on the Job Opportunities page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFile.user_move_the_Curser_in_Careers_Element()"
});
formatter.result({
  "duration": 243512101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFile.the_Click_the_Job_Opportunities_the_page_Will_be_navigate_on_the_Job_Opportunities_page()"
});
formatter.result({
  "duration": 4051871000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-can-apply-jobs-by-using-the-kerv-application;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user Select the Work location",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Select the Working Type",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Select the Worikng option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user get The list on the job Displayed then print the value in console",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Enter the preferred role on the vacancies \"\u003cField\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Click Search icon button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "then it will show only preferred roles only",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "user-can-apply-jobs-by-using-the-kerv-application;;",
  "rows": [
    {
      "cells": [
        "Field"
      ],
      "line": 22,
      "id": "user-can-apply-jobs-by-using-the-kerv-application;;;1"
    },
    {
      "cells": [
        "Senior Test Engineer"
      ],
      "line": 23,
      "id": "user-can-apply-jobs-by-using-the-kerv-application;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "",
  "id": "user-can-apply-jobs-by-using-the-kerv-application;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user Select the Work location",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Select the Working Type",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Select the Worikng option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user get The list on the job Displayed then print the value in console",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Enter the preferred role on the vacancies \"Senior Test Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Click Search icon button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "then it will show only preferred roles only",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFile.user_Select_the_Work_location()"
});
formatter.result({
  "duration": 6288214201,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFile.user_Select_the_Working_Type()"
});
formatter.result({
  "duration": 156511501,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFile.user_Select_the_Worikng_option()"
});
formatter.result({
  "duration": 143933200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFile.user_get_The_list_on_the_job_Displayed_then_print_the_value_in_console()"
});
formatter.result({
  "duration": 163567800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senior Test Engineer",
      "offset": 48
    }
  ],
  "location": "StepDefinitionFile.user_Enter_the_preferred_role_on_the_vacancies(String)"
});
formatter.result({
  "duration": 2589989200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFile.user_Click_Search_icon_button()"
});
formatter.result({
  "duration": 1153773299,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (1203, -112)\n  (Session info: chrome\u003d116.0.5845.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-32LQLHC\u0027, ip: \u0027192.168.29.80\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 116.0.5845.141, chrome: {chromedriverVersion: 116.0.5845.96 (1a3918166880..., userDataDir: C:\\Program Files\\scoped_dir...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:53802}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 2b3eb1f1603e1f3a565b8a6abdbabe96\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.BaseMethods.Base.clickOnElement(Base.java:57)\r\n\tat com.stepDefinition.StepDefinitionFile.user_Click_Search_icon_button(StepDefinitionFile.java:94)\r\n\tat ✽.And user Click Search icon button(src/test/java/com/KervFeatures/KervFile.feature:17)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "",
  "description": "",
  "id": "user-can-apply-jobs-by-using-the-kerv-application;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "user Enter the \"\u003cfirstname\u003e\" in the Firstname Field",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Enter the \"\u003clastname\u003e\" in the Lastname Field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter the \"\u003cemail\u003e\" in the Email Field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Enter the \"\u003cphonenumber\u003e\" in the PhoneNumber Field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user upload the resume in the Resume Field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Enter  the \"\u003cnoticePeriod\u003e\" in the NoticePerid Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user click the Submit button",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "user-can-apply-jobs-by-using-the-kerv-application;;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "phonenumber",
        "noticePeriod"
      ],
      "line": 35,
      "id": "user-can-apply-jobs-by-using-the-kerv-application;;;1"
    },
    {
      "cells": [
        "PannerSelvam",
        "p",
        "selvamtechie@outlook.com",
        "9445621808",
        "15 days"
      ],
      "line": 36,
      "id": "user-can-apply-jobs-by-using-the-kerv-application;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "",
  "description": "",
  "id": "user-can-apply-jobs-by-using-the-kerv-application;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "user Enter the \"PannerSelvam\" in the Firstname Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Enter the \"p\" in the Lastname Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter the \"selvamtechie@outlook.com\" in the Email Field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Enter the \"9445621808\" in the PhoneNumber Field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user upload the resume in the Resume Field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Enter  the \"15 days\" in the NoticePerid Field",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user click the Submit button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "PannerSelvam",
      "offset": 16
    }
  ],
  "location": "StepDefinitionFile.user_Enter_the_in_the_Firstname_Field(String)"
});
formatter.result({
  "duration": 4040280500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p",
      "offset": 16
    }
  ],
  "location": "StepDefinitionFile.user_Enter_the_in_the_Lastname_Field(String)"
});
formatter.result({
  "duration": 1123894101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selvamtechie@outlook.com",
      "offset": 16
    }
  ],
  "location": "StepDefinitionFile.user_Enter_the_in_the_Email_Field(String)"
});
formatter.result({
  "duration": 1353467001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9445621808",
      "offset": 16
    }
  ],
  "location": "StepDefinitionFile.user_Enter_the_in_the_PhoneNumber_Field(String)"
});
formatter.result({
  "duration": 213384699,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFile.user_upload_the_resume_in_the_Resume_Field()"
});
formatter.result({
  "duration": 6344472900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15 days",
      "offset": 17
    }
  ],
  "location": "StepDefinitionFile.user_Enter_the_in_the_NoticePerid_Field(String)"
});
formatter.result({
  "duration": 218186500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionFile.user_click_the_Submit_button()"
});
formatter.result({
  "duration": 9352270400,
  "status": "passed"
});
});