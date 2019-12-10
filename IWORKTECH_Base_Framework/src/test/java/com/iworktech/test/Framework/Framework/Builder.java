package com.iworktech.test.Framework.Framework;

import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterSuite;


import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class Builder  {
    FileReader reader=new FileReader("D:\\Automation\\Framework\\IWORKTECH_Base_Framework\\src\\main\\resources\\ChromeProfile\\config.properties");

    private static Properties properties;
    private static RemoteWebDriver webDriver;

    public Builder() throws IOException {
        properties = new Properties();
        properties.load(reader);
        System.out.println(properties.getProperty("browser"));


    }

    public static void openURL() throws IOException {
        SetBrowser.selectBrowserDriver(properties.getProperty("browser"));
        SetBrowser.getWebDriver().navigate().to(properties.getProperty("site.url"));
    }
    @AfterSuite
    public void initilizeBaseURI(){
        System.out.println("please execute re");

    }

}
