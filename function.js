function hello() {
  console.log("im shuvam");
}

console.log("hello jonny");
hello();
console.log("hello denny");
hello();
console.log("hello jen");
hello();

// function doubleIt(num){
//   var result =num*2;
//   console.log(result);

// }
// doubleIt(5);
// doubleIt(10);

function doubleIt(num) {
  var result = num * 2;
  return result;
}
var first = doubleIt(5);
var second = doubleIt(10);
console.log(first, second);

var total = first + second;
console.log(total);

function add(num1, num2) {
  var result = num1 + num2;
  return result;
}
var sum = add(15, 17);
console.log(sum);
