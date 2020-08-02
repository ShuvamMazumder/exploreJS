// function hello() {
//   console.log("im shuvam");
// }

// console.log("hello jonny");
// hello();
// console.log("hello denny");
// hello();
// console.log("hello jen");
// hello();

// function doubleIt(num){
//   var result =num*2;
//   console.log(result);

// }
// doubleIt(5);
// doubleIt(10);

// function doubleIt(num) {
//   var result = num * 2;
//   return result;
// }
// var first = doubleIt(5);
// var second = doubleIt(10);
// console.log(first, second);

// var total = first + second;
// console.log(total);

// function add(num1, num2) {
//   var result = num1 + num2;
//   return result;
// }
// var sum = add(15, 17);
// console.log(sum);

//call-back function
function callBack(name, age, task) {
    console.log("hello", name);
    console.log("your age", age);
    task();
}
function takeShower(){
  console.log('take a shower');
}
function washHand() {
    console.log("wash ur hand");
}
callBack("abir", 17,washHand);
callBack("shuvam", 23,takeShower);
