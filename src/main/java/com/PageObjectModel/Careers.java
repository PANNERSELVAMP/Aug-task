package com.PageObjectModel;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Careers {

	WebDriver driver;

	@FindBy(xpath = ("(//a[contains(text(),' Careers  ')])[1]"))
	private WebElement careers;

	@FindBy(xpath = ("(//a[contains(text(),'Job Opportunities')])[1]"))
	private WebElement Job_Opp;

	@FindBy(xpath = ("//button[contains(text(),' Location')]"))
	private WebElement location;

	@FindBy(xpath = ("//button[contains(text(),' India')]"))
	private WebElement indialocation;

	@FindBy(xpath = ("//button[contains(text(),'Type')]"))
	private WebElement Type;

	@FindBy(xpath = ("//button[contains(text(),'Full Time')]"))
	private WebElement Typeoption;

	@FindBy(xpath = ("(//button[contains(text(),'Remote')])[1]"))
	private WebElement remote;

	@FindBy(xpath = ("(//button[contains(text(),'Hybrid')])"))
	private WebElement remoteoptions;
	
	@FindBy(xpath = ("//div[@class=\"search-results__title\"]"))
	private List<WebElement> alllist;
	
	
	@FindBy(xpath = ("//input[@placeholder=\"Search vacancies here\"]"))
	private WebElement searchvacancies;
	
	
	@FindBy(xpath = ("//button[@title=\"Search vacancies\"]"))
	private WebElement searchvacanciesbutton;
	
	
	
	
	@FindBy(xpath = ("(//div[@class='search-results__item'])[3]"))
	private WebElement senioroptionbutton;
	
	

	
	public WebElement getSenioroptionbutton() {
		return senioroptionbutton;
	}

	public WebElement getSearchvacancies() {
		return searchvacancies;
	}

	public WebElement getSearchvacanciesbutton() {
		return searchvacanciesbutton;
	}

	public List<WebElement> getAlllist() {
		return alllist;
	}

	public WebElement getCareers() {
		return careers;
	}

	public WebElement getJob_Opp() {
		return Job_Opp;
	}

	public WebElement getLocation() {
		return location;
	}

	public WebElement getIndialocation() {
		return indialocation;
	}

	public WebElement getType() {
		return Type;
	}

	public WebElement getTypeoption() {
		return Typeoption;
	}

	public WebElement getRemote() {
		return remote;
	}

	public WebElement getRemoteoptions() {
		return remoteoptions;
	}

	public Careers(WebDriver dri) {
		driver = dri;
		PageFactory.initElements(driver, this);

	}


	
}
