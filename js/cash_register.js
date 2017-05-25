//console.log('cash register sanity check');
//calculatorModule
var calculator = calculatorModule();

//display area
var display = document.querySelector('.display');

//numbers
var account = 0; //account
var memory = 0; //memory

var nums = []; //number array

var num1 = 0;
var num2 = 0;

//calculation string
var calculation;

//caculation buttons
var add = document.querySelector('#add');
var subtract = document.querySelector('#subtract');
var multiply = document.querySelector('#multiply');
var divide = document.querySelector('#divide');
var equal = document.querySelector('#equal');

//main buttons
var clear = document.querySelector('#clear');
var getBalance = document.querySelector('#get-balance');
var depositCash = document.querySelector('#deposit-cash');
var withdrawCash = document.querySelector('#withdraw-cash');

//number buttons
var numbers = document.querySelectorAll('.number-container button');

//functions
// For loops through number buttons to check which one was clicked
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', function(event) {
    if(nums.indexOf(".") === -1) { //if '.' is not in nums, add to nums
		nums.push(event.currentTarget.value);
    } else if (event.currentTarget.value != ".") { //if next val is != '.' add
    	nums.push(event.currentTarget.value);
    }
    display.innerHTML = parseFloat(nums.join("")); //should we parse here?
  });
}

// Function that clears the display as well as the nums array
function clearAll() {
  	display.innerHTML = "";
  	nums = [];
  	memory = 0;
}

// When clicked it will call the clearAll() function
clear.addEventListener('click', clearAll);

// After the (+) button is clicked it changes the calculation variable
// to signify that an addition equation will be performed and changes
// the value of num1
add.addEventListener('click', function(event) {
	calculation = "add";
  	if(memory === 0) {
  		num1 = parseFloat(display.innerHTML);
  	} else {
  		num1 = memory;
  	}
  	clearAll();
});

// After the (-) button is clicked it changes the calculation variable
// to signify that an subtraction equation will be performed and changes
// the value of num1
subtract.addEventListener('click', function(event) {
	calculation = "subtract";
  	if(memory === 0) {
  		num1 = parseFloat(display.innerHTML);
  	} else {
  		num1 = memory;
  	}
  	clearAll();
});

// After the (*) button is clicked it changes the calculation variable
// to signify that an multiplication equation will be performed and changes
// the value of num1
multiply.addEventListener('click', function(event) {
	calculation = "multiply";
  	if(memory === 0) {
  		num1 = parseFloat(display.innerHTML);
  	} else {
  		num1 = memory;
  	}
  	clearAll();

});

// After the (/) button is clicked it changes the calculation variable
// to signify that an division equation will be performed and changes
// the value of num1
divide.addEventListener('click', function(event) {
	calculation = "divide";
  	if(memory === 0) {
  		num1 = parseFloat(display.innerHTML);
  	} else {
  		num1 = memory;
  	}
  	clearAll();
});

// After the (=) button is clicked it updates num2 and checks what type
// of equation will need to be performed then updates the value of memory
// and updates the display to show the result
equal.addEventListener('click', function(event) {
  	num2 = parseFloat(display.innerHTML);
  	if (calculation === "add") {
  	  memory = calculator.add(num1, num2);
  	  display.innerHTML = memory;

  	} else if (calculation === "subtract") {
  	  memory = calculator.subtract(num1, num2);
  	  display.innerHTML = memory;

  	} else if (calculation === "multiply") {
  	  memory = calculator.multiply(num1, num2);
  	  display.innerHTML = memory;

  	} else if (calculation === "divide") {
  	  memory = calculator.divide(num1, num2);
  	  display.innerHTML = memory;
  	}

});

// Gets the balance of the account
getBalance.addEventListener('click', function(event) {
  	display.innerHTML = account;
});

// Deposits cash into the account
depositCash.addEventListener('click', function(event) {
	var addCash = 0;
	if(display.innerHTML !== "") {
		addCash = parseFloat(display.innerHTML);
		if(addCash >= 0) { //can't deposit a negative number
			account = calculator.add(account, addCash);
		}
	}
  clearAll();
});

// Withdraws cash from the account
withdrawCash.addEventListener('click', function(event) {
	var subtractCash = 0;
	if(display.innerHTML !== "") {
		subtractCash = parseFloat(display.innerHTML);
		if(account === 0 && subtractCash > 0) { //account === 0
			//alert can't withdraw from account
		} else if(subtractCash > account) { //can't withdraw more money than acc has
			//alert can't withdraw more money than acc has
		} else { //withdraw cash from account
			account = calculator.subtract(account, subtractCash);
		}
	}
  	clearAll();
});
