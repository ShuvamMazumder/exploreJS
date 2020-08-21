// function getFullName(firstName,lastName){
//     const fullName= firstName+' '+lastName;
//     return fullName;

// }

// const name= getFullName('shuvam', 'mazumder','loves','whom');
// console.log(name);


function getFullName(firstName,lastName){
    var fullName='';
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + ' '+ namePart;

        
    }
    return fullName;
}

const name= getFullName('shuvam', 'mazumder','loves','whom');
console.log(name);