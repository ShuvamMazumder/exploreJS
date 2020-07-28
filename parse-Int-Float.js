var number1= 2.2;
var number2= '5.5'; //string type
console.log(number1+number2);
number2 = parseFloat (number2); //change string type to float
console.log(number2);
number2 = +number2;
console.log(typeof number2);
console.log(number2);
number2 = parseInt(number2);
console.log(number2);
number1 = ' '+number1;
console.log(typeof number1);