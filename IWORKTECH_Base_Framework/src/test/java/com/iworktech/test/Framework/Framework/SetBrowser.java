package com.iworktech.test.Framework.Framework;

import cucumber.api.java.After;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;

public class SetBrowser extends EventFiringWebDriver {



    private static String FILE_SEPARATOR = System.getProperty("file.separator");
    private static RemoteWebDriver webDriver = null;
    private static final Thread CLOSE_THREAD = new Thread() {
        @Override
        public void run() {
            System.out.println("must close");
            if (webDriver != null) {
                webDriver.quit();
            }
        }
    };

    static {
        Runtime.getRuntime().addShutdownHook(CLOSE_THREAD);
    }

    public SetBrowser(WebDriver driver) {
        super(driver);
    }

    public static WebDriver getWebDriver() {
        return webDriver;
    }


    public static void selectBrowserDriver(String browserName){

        if(browserName.equals("Chrome")){
            setChromeDriverPath();
            initializeChromeDriver();
        }
        else if (browserName.equals("FireFox")) {
            setFireFoxDriverPath();
        }
    }

    private static void setChromeDriverPath(){
        System.setProperty("webdriver.chrome.driver",returnChromeDriverPath());
    }

    private static void setFireFoxDriverPath(){

    }

    private static String returnChromeDriverPath(){
        return "tools" + FILE_SEPARATOR + "chromedriver" + FILE_SEPARATOR + "chromedriver.exe";
    }

    private static void initializeChromeDriver(){
        ChromeOptions options = new ChromeOptions();
        //options.addArguments("incognito");
        options.addArguments("start-maximized");
        webDriver = new ChromeDriver(options);
    }


    @Override
    public void close() {
        System.out.println("close close close");
        if (Thread.currentThread() != CLOSE_THREAD) {
            throw new UnsupportedOperationException(
                    "You shouldn't close this WebDriver. It's shared and will close when the JVM exits.");
        }
        super.close();
    }

}
