function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        //console.log(fibo[i - 1], fibo[i - 2], fibo[i]);
    }
    return fibo;
}

var result = fibonacci(15);
console.log(result);
