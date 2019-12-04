$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("checkoutAsGuestAdditional.feature");
formatter.feature({
  "line": 1,
  "name": "Guest Checkout",
  "description": "As a Customer\r\nI want to be able to navigate through checkout as a guest\r\nSo that I can proceed with placing my order",
  "id": "guest-checkout",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Check if the entered user details at the your personal details section are populating in the Delivery section",
  "description": "",
  "id": "guest-checkout;check-if-the-entered-user-details-at-the-your-personal-details-section-are-populating-in-the-delivery-section",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@valid"
    },
    {
      "line": 6,
      "name": "@regression"
    },
    {
      "line": 6,
      "name": "@testlocal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I fill user details with the below data",
  "rows": [
    {
      "cells": [
        "Title",
        "First Name",
        "Last Name",
        "Email",
        "Password"
      ],
      "line": 9
    },
    {
      "cells": [
        "Mr",
        "Test",
        "Tester",
        "a@a.com",
        "password"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on Continue to delivery button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Delivery Radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see the delivery details pre-populated with the user information entered on the your personal details section",
  "keyword": "Then "
});
formatter.match({
  "location": "memberRegistrationStepDef.i_fill_user_details_with_the_below_data(DataTable)"
});
formatter.result({
  "duration": 138320100,
  "error_message": "java.lang.NullPointerException\r\n\tat java.util.Objects.requireNonNull(Objects.java:203)\r\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:106)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:85)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:45)\r\n\tat com.iworktech.test.Framework.Framework.CommonMethods.\u003cinit\u003e(CommonMethods.java:23)\r\n\tat com.iworktech.test.Framework.PageObjects.UserRegistration.\u003cinit\u003e(UserRegistration.java:14)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:632)\r\n\tat org.picocontainer.parameters.BasicComponentParameter$1.resolveInstance(BasicComponentParameter.java:118)\r\n\tat org.picocontainer.parameters.ComponentParameter$1.resolveInstance(ComponentParameter.java:136)\r\n\tat org.picocontainer.injectors.SingleMemberInjector.getParameter(SingleMemberInjector.java:78)\r\n\tat org.picocontainer.injectors.ConstructorInjector$CtorAndAdapters.getParameterArguments(ConstructorInjector.java:309)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:335)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:584)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:172)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:804)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:145)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:770)\r\n\tat org.testng.TestRunner.run(TestRunner.java:591)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n\tat ✽.When I fill user details with the below data(checkoutAsGuestAdditional.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "memberRegistrationStepDef.i_click_on_Continue_to_delivery_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "memberRegistrationStepDef.i_click_on_Delivery_Radio_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "memberRegistrationStepDef.i_should_see_the_delivery_details_pre_populated_with_the_user_information_entered_on_the_your_personal_details_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 6930500,
  "error_message": "java.lang.NullPointerException\r\n\tat com.iworktech.test.Framework.Helper.ScreenshotHook.embedScreenshot(ScreenshotHook.java:44)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\r\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:584)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:172)\r\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\r\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:804)\r\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:145)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\r\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:770)\r\n\tat org.testng.TestRunner.run(TestRunner.java:591)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:396)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:355)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:304)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:53)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:96)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1180)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1102)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1032)\r\n\tat org.testng.TestNG.run(TestNG.java:1000)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.uri("memberRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "Member Registration",
  "description": "As a user\r\nI want to add a member\r\nSp that the user should be successfully registered",
  "id": "member-registration",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Register the user",
  "description": "",
  "id": "member-registration;register-the-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@testlocal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user is on the site",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters basic information",
  "rows": [
    {
      "cells": [
        "Institution Name",
        "Country",
        "Postal Address",
        "City",
        "Zip Code",
        "Country Code",
        "Telephone"
      ],
      "line": 10
    },
    {
      "cells": [
        "Test Institute",
        "INDIA",
        "411058, Main Street",
        "Delhi",
        "4100108",
        "91",
        "2555555"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "clicks save button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the Institutional Expertise page should open",
  "keyword": "Then "
});
formatter.match({
  "location": "testMe.user_is_on_the_site()"
});
formatter.result({
  "duration": 27794430600,
  "status": "passed"
});
formatter.match({
  "location": "memberRegistrationStepDef.user_enters_basic_information(InstituteInformation\u003e)"
});
formatter.result({
  "duration": 380984000,
  "status": "passed"
});
formatter.match({
  "location": "memberRegistrationStepDef.clicks_save_button()"
});
formatter.result({
  "duration": 51800,
  "status": "passed"
});
formatter.match({
  "location": "memberRegistrationStepDef.the_Institutional_Expertise_page_should_open()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.after({
  "duration": 260800,
  "status": "passed"
});
});