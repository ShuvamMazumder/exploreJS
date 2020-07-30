/*const year =2021;
let remainder =year%4;
console.log(remainder == 0);

*/
/*const year =2021;
let remainder =year%4;
if(remainder == 0){
    console.log("leap year");

}
else{
    console.log("not a leap year");
}*/

function leapYear (year){
    
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

var answer = leapYear(1700);
console.log(answer);
