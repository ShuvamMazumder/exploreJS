//this code hv a problem
/*
var n=19;
for(i=2;i<n;i++){
    console.log(i,n%i);
    if(n==0){
        console.log("not a prime number");
    }
    else console.log("is a prime number");
}
*/

//problme fixed using function

function isPrime(n) {
    for (var i = 2; i < n; i++) {
        //console.log(i,n%i);
        if (n % i == 0) {
            return "not a prime number";
        }
        return "is prime number";
    }
}
var result = isPrime(19);
console.log(result);
