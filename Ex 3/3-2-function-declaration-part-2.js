
// From function declarations to explicit and implicit return functions (one of each).
const welcome = () => "Welcome to 'Appleseeds Bootcamp!'"

const power = a => {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

// From function expressions to IIFE functions.
//! (const squareRoot = a => Math.sqrt(a))();

(function squareRoot(a){
return (Math.sqrt(a));
}) (); // a = any

//! const randomNumbers = (a, b) => Math.random() * (a - b) + b;

(function randomNumbers(a,b){
    return (Math.random()* (a - b) +b);
})(); // a,b = any 