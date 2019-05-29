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

