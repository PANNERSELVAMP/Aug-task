package com.RunnerFile;

import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.BaseMethods.Base;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\KervFeatures\\KervFile.feature",
glue = "com.stepDefinition",
monochrome = true,
plugin = {"html:ReportFolder/HtmlReport.html","pretty"})

public class Runner extends Base{
	public static WebDriver driver;

	@BeforeClass
	public static void setUp() {
	driver=Browser_Launch("chrome");

	}

}
