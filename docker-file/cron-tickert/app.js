var cron = require('node-cron');
var task = require('./tasks/sync-db.task')


/********
 * MAIN *
 ********/
console.log('START APPLICATION');
cron.schedule('1-59/5 * * * * *', () => {
  task.syncDB();
});