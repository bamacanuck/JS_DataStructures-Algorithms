let myVariable = 'global';
let myOtherVariable = 'global';

function myFunction() {
    let myVariable = 'local';
    return myVariable;
}

function myOtherFunction() {
    let myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable); // 1
console.log(myFunction()); // 2

console.log(myOtherVariable); // 3
console.log(myOtherFunction()); // 4
console.log(myOtherVariable); // 5
