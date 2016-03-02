$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Local.feature");
formatter.feature({
  "line": 2,
  "name": "Going to nu.nl. Accept cookies. Navigate to the TV Guide and then click on primetime",
  "description": "",
  "id": "going-to-nu.nl.-accept-cookies.-navigate-to-the-tv-guide-and-then-click-on-primetime",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@demo"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralSteps.UserOnLandingPage()"
});
formatter.result({
  "duration": 6486129243,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Window not found. The browser window may have been closed.\nCommand duration or timeout: 589 milliseconds\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027tb-l450-nl01\u0027, ip: \u0027192.168.3.34\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_74\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0.2, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9cebe271-45cf-4d14-953e-8d01f5fa0fcb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:311)\r\n\tat steps.GeneralSteps.UserOnLandingPage(GeneralSteps.java:18)\r\n\tat ✽.Given User is on landing page(Local.feature:5)\r\nCaused by: org.openqa.selenium.NoSuchWindowException: Window not found. The browser window may have been closed.\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd10cf2c0560f637404c2d96164b67d9d67\u0027, time: \u00272015-10-09 13:08:06\u0027\nSystem info: host: \u0027tb-l450-nl01\u0027, ip: \u0027192.168.3.34\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_74\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.nsCommandProcessor.prototype.execute(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12602)\r\n\tat \u003canonymous class\u003e.Dispatcher.executeAs/\u003c(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9455)\r\n\tat \u003canonymous class\u003e.Resource.prototype.handle(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9602)\r\n\tat \u003canonymous class\u003e.Dispatcher.prototype.dispatch(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:9549)\r\n\tat \u003canonymous class\u003e.WebDriverServer/\u003c.handle(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:12390)\r\n\tat \u003canonymous class\u003e.createHandlerFunc/\u003c(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:2054)\r\n\tat \u003canonymous class\u003e.ServerHandler.prototype.handleResponse(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:2387)\r\n\tat \u003canonymous class\u003e.Connection.prototype.process(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:1223)\r\n\tat \u003canonymous class\u003e.RequestReader.prototype._handleResponse(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:1677)\r\n\tat \u003canonymous class\u003e.RequestReader.prototype._processBody(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:1525)\r\n\tat \u003canonymous class\u003e.RequestReader.prototype.onInputStreamReady(file:///C:/Users/MD18B~1.MOO/AppData/Local/Temp/anonymous3451569301604779828webdriver-profile/extensions/fxdriver@googlecode.com/components/httpd.js:1393)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 8,
  "name": "test1",
  "description": "",
  "id": "going-to-nu.nl.-accept-cookies.-navigate-to-the-tv-guide-and-then-click-on-primetime;test1",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Agree Cookies",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Navigate to TV guide",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to Primetime",
  "keyword": "Then "
});
formatter.match({
  "location": "GeneralSteps.AgreeCookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GeneralSteps.TVGuide()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GeneralSteps.PrimeTime()"
});
formatter.result({
  "status": "skipped"
});
