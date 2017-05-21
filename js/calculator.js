/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
<<<<<<< HEAD
 /**
  * Declare a function named `calculatorModule`
  * this function will have two private variables declared inside of it.
  * @variable PRIVATE { Number } `memory`
  * @variable PRIVATE { Number } `total`
  * @return {object} `calculator` object that can be used
  */
 function calculatorModule() {

   function add(x,y) {
     return x+y;
   }

   function subtract(x,y) {
     return x-y;
   }

   function multiply(x,y) {
     return x*y;
   }

   function divide(x,y) {
     return x/y;
   }

   return {
     add: add,
     subtract: subtract,
     multiply: multiply,
     divide: divide
   };

 }
=======
function calculatorModule() {

  function add(x,y) {
    return x+y;
  }

  function subtract(x,y) {
    return x-y;
  }

  function multiply(x,y) {
    return x*y;
  }

  function divide(x) {
    return x/y;
  }

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  };

}
>>>>>>> bef954ca856dc40c4eb9678f31f837517f5c9ff2
