// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

/**
 * @fileoverview An example WebDriver script. This requires the chromedriver
 * to be present on the system PATH.
 *
 * Usage:
 *   // Default behavior
 *   node selenium-webdriver/example/google_search.js
 *
 *   // Target Chrome locally; the chromedriver must be on your PATH
 *   SELENIUM_BROWSER=chrome node selenium-webdriver/example/google_search.js
 *
 *   // Use a local copy of the standalone Selenium server
 *   SELENIUM_SERVER_JAR=/path/to/selenium-server-standalone.jar \
 *     node selenium-webdriver/example/google_search.js
 *
 *   // Target a remove Selenium server
 *   SELENIUM_REMOTE_URL=http://www.example.com:4444/wd/hub \
 *     node selenium-webdriver/example/google_search.js
 */
function login(account, password) {
	driver.findElement(By.name('loginfmt')).sendKeys(account);
	driver.sleep(2000);
	driver.findElement(By.name('passwd')).sendKeys(password);
	driver.sleep(2000);
	driver.findElement(By.id('idSIButton9')).click().then(function(){
	driver.sleep(4000);
	});
}
function randomSleep(){
	var min = 2000;
	var max = 8000;
	// and the formula is:
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var promise = require('selenium-webdriver').promise;

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

    //DO LOGIN FIRST
    driver.get('https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1454042759&rver=6.7.6631.0&wp=MBI&wreply=https%3a%2f%2fwww.bing.com%2fsecure%2fPassport.aspx%3frequrl%3dhttps%253a%252f%252fwww.bing.com%252frewards%252fdashboard%253fwlexpsignin%253d1&lc=1033&id=264960');
	driver.sleep(4000);
	login(process.argv[2], process.argv[3]);
	driver.wait(until.titleIs('Bing Rewards - Dashboard'), 10000000);
	driver.sleep(2000);
	//Ensure we are logged in
	// var confirmLogin = driver.findElement(By.id('id_n'));
	// confirmLogin.getInnerHtml().then(function(html){
	// 	if(html !== process.argv[4]){
	// 		driver.findElement(By.id('id_s')).click().then(function(){
	// 			driver.findElement(By.id('id_link_text')).click().then(function(){
	// 				driver.sleep(2000);
	// 				login(i, accounts);
	// 			});
	// 		});
	// 	}
	// });
	driver.findElement(By.className('simpleSignIn')).click().then(function(){
					driver.sleep(2000);
	 				//login(i, accounts);
	 			});

	driver.get('http://www.newsnow.co.uk/h/Sport');
	driver.sleep(3000);

	var pendingElements = driver.findElements(By.xpath("//*[@class='hll']"));

	pendingElements.then(function (elements) {
	    var pendingHtml = elements.map(function (elem) {
	        return elem.getInnerHtml();
	    });

		promise.all(pendingHtml).then(function (allHtml) {
			  driver.get('http://www.bing.com');
			for(var i = 0; i < 30 ;i++){
	        (function(j){
			driver.findElement(By.name('q')).sendKeys(allHtml[j+6]);
			driver.sleep(randomSleep());
			driver.findElement(By.id('sb_form_go')).click();
			driver.sleep(randomSleep());
			driver.findElement(By.name('q')).clear();
			driver.sleep(randomSleep());
			})(i);
	  		}
	  		//log out
	  		driver.findElement(By.id('id_n')).click();
	  		driver.sleep(2000);
	  		driver.findElement(By.className('id_link_text')).click();
	  		driver.sleep(2000);
		});
	});

driver.quit();