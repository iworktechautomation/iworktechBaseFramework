package com.iworktech.test.Framework;


import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

public class BaseClass {

@BeforeSuite
    public void beforeall(){
    System.out.println("before all");

}

    @AfterSuite
    public void afterall(){
        System.out.println("after all");

    }

    /*
    1. Fetch the values from the properties file for the browser
    2. Accordingly, select the browser driver
    3. Listeners ??
    4. Report ??
    5. Screenshots
     */

}
