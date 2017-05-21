//console.log('cash register sanity check');
//calculatorModule
var calculator = calculatorModule();

//display area
var display = document.querySelector('.display');

//buttons
var clear = document.querySelector('#clear');
var getBalance = document.querySelector('#get-balance');
var depositCash = document.querySelector('#deposit cash');
var withdrawCash = document.querySelector('#withdraw cash');

display.innerHTML = '$0.01';

display.innerHTML = '$0.02';

clear.addEventListener('click', function (event) {
	display.innerHTML = '$0.00';
});

getBalance.addEventListener('click', function(event) {
	alert('hi');
});

depositCash.addEventListener('click', function(event) {

});

withdrawCash.addEventListener('click', function(event) {

});

