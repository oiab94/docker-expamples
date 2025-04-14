let taskExecutedAmount = 0;


/**
 * Tarea verifica el estado de la DB
 * @returns { number } Retorna la cantidad de veces que se ejecuto la tarea
 */
const syncDB = () => {
  console.log(`RUNNING A TASK EVERY 5 SECOND, TASK EXECUTED`);
  console.log(`TASK EXECUTED AMOUNT: ${ taskExecutedAmount }`);
  taskExecutedAmount++;

  return taskExecutedAmount;
}



module.exports = {
  syncDB,
}