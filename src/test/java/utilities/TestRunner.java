package utilities;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


//Scenario tags: @demo
@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/features/",
        //tags = {"@demo"},
        format = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        glue = "steps"
)

public class TestRunner {
}
