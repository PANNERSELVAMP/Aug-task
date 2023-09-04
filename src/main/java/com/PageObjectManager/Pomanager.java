package com.PageObjectManager;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.PageObjectModel.Careers;
import com.PageObjectModel.Cookies;
import com.PageObjectModel.User_Data;

public class Pomanager {

	WebDriver driver;

	Cookies cook;
	Careers care;
	User_Data data;

	public Cookies getCook() {
		cook = new Cookies(driver);
		return cook;
	}

	public Careers getCar() {
		care = new Careers(driver);
		return care;
	}

	public User_Data getData() {
		data = new User_Data(driver);
		return data;
	}

	public Pomanager(WebDriver dri) {
		driver = dri;
		PageFactory.initElements(driver, this);

	}

}
