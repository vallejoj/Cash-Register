//console.log('cash register sanity check');
//calculatorModule
var calculator = calculatorModule();

//display area
var display = document.querySelector('.display');

//numbers
var total = 0;
var memory = 0;

var nums = [];

var num1 = 0;
var num2 = 0;
<<<<<<< HEAD

var calculation;
=======
>>>>>>> bef954ca856dc40c4eb9678f31f837517f5c9ff2
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

var numbers = document.querySelectorAll('.number-container button');


// display.innerHTML = '$0.00';

//functions
for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function(event){
		// display.innerHTML=event.currentTarget.value;

			nums.push(event.currentTarget.value);
			display.innerHTML = parseFloat(nums.join(""));

	});
}
function clearAll() {
	display.innerHTML = '0';
	nums = [];
}

add.addEventListener('click' ,function(event){
  	num1 = parseFloat(nums.join(""));
    calculation="add";
    clearAll();

})
subtract.addEventListener('click' ,function(event){
  	num1 = parseFloat(nums.join(""));
    clearAll();
calculation="subtract";
})
multiply.addEventListener('click' ,function(event){
  	num1 = parseFloat(nums.join(""));
    calculation="multiply";
    clearAll();

})
divide.addEventListener('click' ,function(event){
  	num1 = parseFloat(nums.join(""));
    calculation="divide";
    clearAll();
})
equal.addEventListener('click' ,function(event){
  	num2 = parseFloat(nums.join(""));
    console.log(num2);
    console.log(calculation);
    console.log(num1);
    if (calculation==="add") {
      memory=calculator.add(num1,num2);
      display.innerHTML=memory;


    }else if (calculation==="subtract") {
      memory=calculator.subtract(num1,num2);
      display.innerHTML=memory;

  }else if (calculation==="multiply") {
    memory=calculator.multiply(num1,num2);
    display.innerHTML=memory;

}else if (calculation==="divide") {
  memory=calculator.divide(num1,num2);
  display.innerHTML=memory;
  console.log(memory)
}

})


display.innerHTML = '$0.00';

//functions
function clearAll() {
	display.innerHTML = '$0.00';
	nums = [];
}

clear.addEventListener('click', clearAll);

getBalance.addEventListener('click', function(event) {
	display.innerHTML = total;
});

depositCash.addEventListener('click', function(event) {

	num1 = parseFloat(nums.join(""));

	total = calculator.add(total, memory);

	total = calculator.add(total, num1);

	clearAll();
});

withdrawCash.addEventListener('click', function(event) {
	num1 = parseFloat(nums.join(""));
	total = calculator.subtract(total, num1);
	clearAll();
});

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function(event){
		// display.innerHTML=event.currentTarget.value;

			nums.push(event.currentTarget.value);
			display.innerHTML = parseFloat(nums.join(""));

	});
}
