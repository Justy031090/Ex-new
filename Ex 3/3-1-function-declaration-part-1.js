
// From function declarations to function expressions
let firstExpression = function () {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}

const power = function(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

const add = function(a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
}

// From function expressions to function declarations
function hello() { 
    return ("Hello!");
}

function squareRoot(a){
    return Math.sqrt(a);
}

function randomNumbers(a, b) {
    return Math.random() * (a - b) + b;
}



