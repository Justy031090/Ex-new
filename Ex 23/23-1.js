
// Answer the following questions:
// Question 1:
// In your own words what will this point to and why?(Note 
// this is the global scope)
// console.log(this);

//! the window itself, its been called within the window.
// console.log(this)


// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// const myObj = {
//  name: "Timmy",
//  greet: () => {
//  console.log(`Hello ${this.name}`);
//  },
// };
// myObj.greet();

//! this will point the window since its an arrow function.

//! const myObj = {
//!     name: "Timmy",
//!     greet: function () {
//!         console.log(`Hello ${this.name}`);
//!     },
//! };
//! myObj.greet();

// Question 3:
// In your own words what will this point to and why?
// const myFuncDec = function () {
//     console.log(this);
// };
//! this will point to the function because its been called within it.



// Question 4:
// In your own words what will this point to and why?
// const myFuncArrow = () => {
// console.log(this);
// };
// myFuncArrow();

//! the first is an arrow function, so it will refer to the window
//! the 2nd is called within the global window, so it will refer the window also.


// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
// document.querySelector(".element").addEventListener(() => {
//  console.log(this);
// });

//! its an arrow function, so this will refer to the window.

// document.querySelector(".element").addEventListener( function () {
//     console.log(this);
// });