module.exports = function(grunt) {
  grunt.initConfig({
      exec: {
        runMobile: {
              cmd: function(account, password){
                return 'node chrome_mobile_emulation.js ' + account + ' ' + password
              }
          },
        runDesktop: {
              cmd: function(account, password, first_name){
                return 'node desktopBingSearch ' + account + ' ' + password + ' ' + first_name
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  //get our list of accounts
  var fs = require('fs');
  var data = JSON.parse(fs.readFileSync('accounts.json', 'utf-8'));
  
     grunt.registerTask('default', 'Running The task',function(){
        data.accounts.forEach(function(payload){
            grunt.task.run('exec:runMobile:'+payload.account+':'+payload.password);
            grunt.task.run('exec:runDesktop:'+payload.account+':'+payload.password+':'+payload.first_name);
        });
    });
     
};