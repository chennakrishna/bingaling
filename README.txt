Follow these steps!

1. download node.js https://nodejs.org/en/download/
2. make a new folder and install node to that folder
3. download cmder http://cmder.net/     ****This allows you to run linux commands on a windows machine*****
4. Move the bingaling folder inside the folder you installed node to
5. open cmder and change directories to where you installed node ** use 'ls' to list the options in your 
current folder and 'cd FOLDER NAME' to change folders until you get to your folder
6. once you get to where you installed node check to make sure node works by typing 'node' you should see >
7. press ctrl + c twice to exit node mode
8. In Cmder install node modules: 'npm install grunt' 'npm install grunt-exec' 'npm install selenium-webdriver' 'npm install node-cron'
9. Add your accounts to the accounts.json file. They need a acct name, password, and first name of the account these are case sensitive

10. to test the scripts, type in 'node chrome_mobile_emulation.js USERNAME PASSWORD'
11. You can run all of your accounts by simply typing in 'grunt' ******* I suggest doing this for the first day or two to make sure they run fine *******
12. If the above test was successful you can set it up to run on a cron job by typing 'cronJob.js', this will run all the accounts starting at 6:45am
12.5. you can modify the cron time by editing these values : 'new CronJob('00 45 05 * * 0-6', function() {'
12.75. 00 means at the start of the minute, 45 is minutes and 05 the hour, I have timezone set to LA so it will run an hour after set time. 

FAQ::**&^^!@

1. One of my accounts has 0 points!!
A. Check to make sure that account is signed up for bing rewards

2. One of my accounts seems to only do mobile searches???
A. Make sure the first name you have in your accounts.json matches the MICROSOFT account name(not bing rewards account name)

3. I am getting some node errors or something....
A. www.google.com works wonders. If not text me....

4. I broke something...
A. stop it. go download the zip again.

