package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import utilities.DriverFactory;
import utilities.PropertyReader;

import java.util.concurrent.TimeUnit;


public class GeneralSteps extends DriverFactory {

    @Given("^User is on landing page$")
    public void UserOnLandingPage() throws Throwable {
        driver.get(PropertyReader.HomePage);
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
    }

    @And("^Agree Cookies$")
    public void AgreeCookies() throws Throwable {
        //Agrees to cookies
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(".//*[@id='cookiebar-top']/div/a")));
        driver.findElement(By.xpath(".//*[@id='cookiebar-top']/div/a")).click();
    }

    @And("^Navigate to TV guide$")
    public void TVGuide() throws Throwable {
        driver.findElement(By.xpath(".//*[@id='block-324313']/div/div[2]/div/div/div[4]/div/a/span/span[1]")).click();
    }

    @And("Navigate to Primetime")
    public void PrimeTime() throws Throwable {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.findElement(By.xpath(".//*[@id='block-241821']/div/div/nav/ul/li[3]/a")).click();
    }

    @cucumber.api.java.After
    public void destroyDriver() {
        driver.quit();
        driver = null;
    }
}
