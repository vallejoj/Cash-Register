//console.log('cash register sanity check');
//calculatorModule
var calculator = calculatorModule();

//display area
var display = document.querySelector('.display');

//numbers
var total = 0;
var memory = 0;

var num1Arr = [];
var num2Arr = [];

var num1 = 0;
var num2 = 0;
var temp = [];
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

display.innerHTML = '$0.00';

//functions
clear.addEventListener('click', function (event) {
	display.innerHTML = '$0.00';
});

getBalance.addEventListener('click', function(event) {
	display.innerHTML = total;
});

depositCash.addEventListener('click', function(event) {

	num1 = parseFloat(num1Arr.join(""));
	console.log(num1);
	console.log(num1Arr);
	total = calculator.add(total, num1);
	clear;
});

withdrawCash.addEventListener('click', function(event) {

});

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function(event){
		// display.innerHTML=event.currentTarget.value;
		
			num1Arr.push(event.currentTarget.value);
			display.innerHTML = parseFloat(num1Arr.join(""));
		
	});
}




