var factorial = 1;
function Factorial(n) {
  for (i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
var result = Factorial(10);
console.log(result);
