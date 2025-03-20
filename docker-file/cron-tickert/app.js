var cron = require('node-cron');

console.log('START APPLICATION');

var taskExecutdeAmount = 0;

cron.schedule('1-59/5 * * * * *', () => {
  taskExecutdeAmount++;
  console.log(`running a task every 5 second, task executed ${ taskExecutdeAmount }`);
});