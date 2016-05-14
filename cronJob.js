var CronJob = require('cron').CronJob;
new CronJob('00 45 05 * * 0-6', function() {
  var exec = require('child_process').exec;
  var cmd = 'grunt';

  exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  });
}, null, true, 'America/Los_Angeles');