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
 * @fileoverview This is an example of emulating a mobile device using the
 * ChromeDriver.
 */

var promise = require('selenium-webdriver').promise;
  var webdriver = require('selenium-webdriver'),
   By = webdriver.By,
     until = webdriver.until,
     chrome = require('./node_modules/selenium-webdriver/chrome');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options()
        .setMobileEmulation({deviceName: 'Google Nexus 5'}))
    .build();

function login(account, password) {
	console.log('account', account);
	//password = 'Bindu@8Krishna';
	console.log('password', password);
	driver.findElement(By.name('loginfmt')).sendKeys(account);
	driver.sleep(200);
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

    driver.get('https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1454042759&rver=6.7.6631.0&wp=MBI&wreply=https%3a%2f%2fwww.bing.com%2fsecure%2fPassport.aspx%3frequrl%3dhttps%253a%252f%252fwww.bing.com%252frewards%252fdashboard%253fwlexpsignin%253d1&lc=1033&id=264960');
	driver.sleep(4000);
	console.log(process.argv[0], process.argv[1]);
	login(process.argv[2], process.argv[3]);
	driver.sleep(2000);
	driver.wait(until.elementLocated(By.className('white')), 10 * 1000).then(function(elm) {
    	elm.click();
	});
	driver.sleep(2000);
	driver.get('http://www.newsnow.co.uk/h/Sport');
	driver.sleep(2000);

	var pendingElements = driver.findElements(By.xpath("//a[@style='font-weight:bold']"));

	pendingElements.then(function (elements) {
	    var pendingHtml = elements.map(function (elem) {
	        return elem.getInnerHtml();
	    });

		promise.all(pendingHtml).then(function (allHtml) {
			driver.sleep(4000);
			 driver.get('http://www.bing.com');
			driver.sleep(4000);
			for(var i = 0; i < 20 ;i++){
	        (function(j){
	       	var holder = allHtml[j+6];
	       	holder = holder.slice(8 , holder.length-9);
			driver.findElement(By.name('q')).sendKeys(holder);
			driver.sleep(randomSleep());
			driver.findElement(By.name("q")).sendKeys(webdriver.Key.ENTER);
			driver.sleep(randomSleep()+randomSleep());
			driver.findElement(By.name('q')).clear();
			driver.sleep(randomSleep());
			})(i);
	  		}
		});
	});


  driver.quit();