//console.log('cash register sanity check');
//calculatorModule
var calculator = calculatorModule();

//display area
var display = document.querySelector('.display');

//number buttons

//caculation buttons

//main buttons
var clear = document.querySelector('#clear');
var getBalance = document.querySelector('#get-balance');
var depositCash = document.querySelector('#deposit-cash');
var withdrawCash = document.querySelector('#withdraw-cash');
var numbers=document.querySelectorAll('.number-container button');
display.innerHTML = '$0.00';

clear.addEventListener('click', function (event) {
	display.innerHTML = '$0.00';
});
for (var i = 0; i < numbers.length; i++) {

numbers[i].addEventListener('click', function(event){
display.innerHTML=event.currentTarget.value
});
}

getBalance.addEventListener('click', function(event) {

});

depositCash.addEventListener('click', function(event) {

});

withdrawCash.addEventListener('click', function(event) {

});
