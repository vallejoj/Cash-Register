/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule() {
  var total = 0;

  function getTotal() {
    return total;
  }

  function add(x) {
    total += x;
    return total;
  }

  function subtract(x) {
    total -= x;
    return total;
  }

  function multiply(x) {
    total *= x;
    return total;
  }

  function divide(x) {
    total /= x;
    return total;
  }

  function clearMemory() {
    memory = 0;
    return memory;
  }
  function recallMemory() {
    return memory;
  }

  function saveMemory() {
    memory = total;
    return memory;
  }
  return {
    getTotal: getTotal,
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    recallMemory:recallMemory,
    saveMemory:saveMemory,
    clearMemory: clearMemory,
  }

}
console.log(calculatorModule())
