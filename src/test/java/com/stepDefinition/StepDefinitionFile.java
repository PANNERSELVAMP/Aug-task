package com.stepDefinition;

import java.util.List;
import java.util.Set;

import javax.security.auth.kerberos.KeyTab;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.BaseMethods.Base;
import com.PageObjectManager.Pomanager;
import com.RunnerFile.Runner;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitionFile extends Base {

	public static WebDriver driver = Runner.driver;

	Pomanager pom = new Pomanager(driver);

	@Given("^user launch  kerv Application by using url$")
	public void user_launch_kerv_Application_by_using_url() throws Throwable {
		launchUrl("https://kerv.com/careers-at-kerv/");

	}

	@When("^then user handle the Cookies in the kerv Application$")
	public void then_user_handle_the_Cookies_in_the_kerv_Application() throws Throwable {
		clickOnElement(pom.getCook().getCook());
		Thread.sleep(5000);

	}

	@When("^user move the Curser in Careers Element$")
	public void user_move_the_Curser_in_Careers_Element() throws Throwable {
		mouseBasedActions("move", driver, pom.getCar().getCareers());

	}

	@Then("^the Click the Job Opportunities  the page Will be navigate on the Job Opportunities page$")
	public void the_Click_the_Job_Opportunities_the_page_Will_be_navigate_on_the_Job_Opportunities_page()
			throws Throwable {
		clickOnElement(pom.getCar().getJob_Opp());
	}

	@When("^user Select the Work location$")
	public void user_Select_the_Work_location() throws Throwable {
		ScrollByElement("1800");
		sleep(6000);

		jsclick(pom.getCar().getLocation());
		jsclick(pom.getCar().getIndialocation());
	}

	@When("^user Select the Working Type$")
	public void user_Select_the_Working_Type() throws Throwable {
		jsclick(pom.getCar().getType());
		jsclick(pom.getCar().getTypeoption());
	}

	@When("^user Select the Worikng option$")
	public void user_Select_the_Worikng_option() throws Throwable {
		jsclick(pom.getCar().getRemote());
		jsclick(pom.getCar().getRemoteoptions());
	}

	@When("^user get The list on the job Displayed then print the value in console$")
	public void user_get_The_list_on_the_job_Displayed_then_print_the_value_in_console() throws Throwable {

		List<WebElement> l = pom.getCar().getAlllist();

		for (WebElement all : l) {
			String text = all.getText();
			System.out.println("Listed Jobs :" + text);

		}

	}

	@When("^user Enter the preferred role on the vacancies \"([^\"]*)\"Senior Test Engineer\"([^\"]*)\"$")
	public void user_Enter_the_preferred_role_on_the_vacancies_Senior_Test_Engineer(String role, String arg2)
			throws Throwable {
		sendKeys(pom.getCar().getSearchvacancies(), role);
		
	}

	@When("^user Click Search icon button$")
	public void user_Click_Search_icon_button() throws Throwable {
		clickOnElement(pom.getCar().getSearchvacanciesbutton());
		sleep(2000);

	}

	
	

@When("^user Enter the preferred role on the vacancies \"([^\"]*)\"$")
public void user_Enter_the_preferred_role_on_the_vacancies(String arg1) throws Throwable {
	
	sleep(2000);
	ScrollByElement("200");

	mouseBasedActions("move", driver, pom.getCar().getSenioroptionbutton());
	mouseBasedActions("click", driver, pom.getCar().getSenioroptionbutton());
	
	
	
}
//	@When("^then it will show only preferred roles only$")
//	public void then_it_will_show_only_preferred_roles_only() throws Throwable {
//		sleep(2000);
//		ScrollByElement("200");
//
//		mouseBasedActions("move", driver, pom.getCar().getSenioroptionbutton());
//		mouseBasedActions("click", driver, pom.getCar().getSenioroptionbutton());
//		
//	}



	@When("^user Enter the \"([^\"]*)\" in the Firstname Field$")
	public void user_Enter_the_in_the_Firstname_Field(String arg1) throws Throwable {

		Set<String> windowHandles = driver.getWindowHandles();
		for (String s : windowHandles) {
			String title = driver.switchTo().window(s).getTitle();
			System.out.println(title);
		}

		sleep(2000);

		ScrollByElement("4000");
		sendKeys(pom.getData().getFirstName(), arg1);
	}

	@When("^user Enter the \"([^\"]*)\" in the Lastname Field$")
	public void user_Enter_the_in_the_Lastname_Field(String arg1) throws Throwable {
		sendKeys(pom.getData().getLastname(), arg1);
		sleep(1000);
	}

	@When("^user Enter the \"([^\"]*)\" in the Email Field$")
	public void user_Enter_the_in_the_Email_Field(String arg1) throws Throwable {
		sendKeys(pom.getData().getEmail(), arg1);
		ScrollByElement("500");
		sleep(1000);
	}

	@When("^user Enter the \"([^\"]*)\" in the PhoneNumber Field$")
	public void user_Enter_the_in_the_PhoneNumber_Field(String arg1) throws Throwable {
		sendKeys(pom.getData().getPhone(), arg1);
		
	}
	@When("^user upload the resume in the Resume Field$")
	public void user_upload_the_resume_in_the_Resume_Field() throws Throwable {
		jsclick(pom.getData().getResume());
	    sleep(1000);
	    fileuploadMethod("PannerSelvam .pdf");
	    sleep(5000);
	}  
	
	
	
	@When("^user Enter  the \"([^\"]*)\" in the NoticePerid Field$")
	public void user_Enter_the_in_the_NoticePerid_Field(String arg1) throws Throwable {
		sendKeys(pom.getData().getNoticeperiod(), arg1);
	}

	@Then("^user click the Submit button$")
	public void user_click_the_Submit_button() throws Throwable {
		jsclick(pom.getData().getSubmit());
	
	}

}
