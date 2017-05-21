/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
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
