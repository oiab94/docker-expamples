var cron = require('node-cron');

console.log('START APPLICATION');

var taskExecutdeAmount = 0;

cron.schedule('1-59/5 * * * * *', () => {
  taskExecutdeAmount++;
  console.log(`RUNNING A TASK EVERY 5 SECOND, TASK EXECUTED`);
  console.log(`TASK EXECUTED AMOUNT: ${ taskExecutdeAmount }`);
});