var friendAge = [10, 15, 20, 22, 23];
console.log(friendAge[0]);

var crushAge = friendAge[2];
console.log(crushAge);

friendAge[1] = 17;
console.log(friendAge[1]);

var findPosition = friendAge.indexOf(23);
console.log(findPosition);

var findPosition = friendAge.indexOf(30);
console.log(findPosition);

friendAge.push(15);
console.log(friendAge, friendAge.length);

friendAge.pop();
console.log(friendAge);
