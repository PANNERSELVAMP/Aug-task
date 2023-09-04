package com.PageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Cookies {
	WebDriver driver;
	
	@FindBy(xpath=("(//a[contains(text(),'Accept all ')])[1]"))
	private WebElement cook ;
	
	
	
	public WebElement getCook() {
		return cook;
	}



	public Cookies(WebDriver dri) {
		driver= dri;
		PageFactory.initElements(driver, this);
		
	}

}
