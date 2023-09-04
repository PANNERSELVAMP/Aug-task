package com.PageObjectModel;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class User_Data {
	WebDriver driver;

	@FindBy(xpath = ("//input[@name='candidate_first_name']"))
	private WebElement FirstName;

	@FindBy(xpath = ("//input[@name='candidate_last_name']"))
	private WebElement Lastname;

	@FindBy(xpath = ("//input[@name='candidate_email']"))
	private WebElement Email;

	@FindBy(xpath = ("//input[@name='candidate_phone']"))
	private WebElement phone;

	@FindBy(xpath = ("//input[@id='resume']"))
	private WebElement resume;

	@FindBy(xpath = ("//input[@name='notice_period']"))
	private WebElement noticeperiod;

	@FindBy(xpath = ("(//button[@type='submit'])[1]"))
	private WebElement submit;

	public WebElement getFirstName() {
		return FirstName;
	}

	public WebElement getLastname() {
		return Lastname;
	}

	public WebElement getEmail() {
		return Email;
	}

	public WebElement getPhone() {
		return phone;
	}

	public WebElement getResume() {
		return resume;
	}

	public WebElement getNoticeperiod() {
		return noticeperiod;
	}

	public WebElement getSubmit() {
		return submit;
	}

	public User_Data(WebDriver dri) {
		driver = dri;
		PageFactory.initElements(driver, this);

	}

}
