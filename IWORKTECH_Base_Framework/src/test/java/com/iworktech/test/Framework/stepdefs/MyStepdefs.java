package com.iworktech.test.Framework.stepdefs;

import com.iworktech.test.Framework.Framework.SetBrowser;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;

public class MyStepdefs {
    @And("^sdsd$")
    public void sdsd() {
        System.out.println("yerer");
    }

/*    @After
    public void closeAll(){
        System.out.println("yash is here");
        SetBrowser.tearDown();
    }*/
}
