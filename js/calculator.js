
 /**
  * Declare a function named `calculatorModule`
  * this function will have two private variables declared inside of it.
  * @variable PRIVATE { Number } `memory`
  * @variable PRIVATE { Number } `total`
  * @return {object} `calculator` object that can be used
  */
 function calculatorModule() {

   /**
    * A function that adds x to y
    * @param { Number } x
    * @param { Number } y
    * @return { Number } total of x+y
    */
   function add(x,y) {
     return x+y;
   }

   /**
    * A function that subtracts y from x
    * @param { Number } x
    * @param { Number } y
    * @return { Number } total of x-y
    */
   function subtract(x,y) {
     return x-y;
   }

   /**
    * A function that multiplies x and y
    * @param { Number } x
    * @param { Number } y
    * @return { Number } total of x*y
    */
   function multiply(x,y) {
     return x*y;
   }

   /**
    * A function that divides x by y
    * @param { Number } x
    * @param { Number } y
    * @return { Number } total of x*y
    */
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
