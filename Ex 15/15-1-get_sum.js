// function getSum(arr1, arr2){
//     const sum = 0;
//     for (let i=0; i < arr1.length; i++){
//     sum += arr1[i];
//     }
//     for (let i=0; i < arr2.length; i++){
//     sum += arr2[i];
//     }
//     }
//     getSum([1,2,3][5,66,23]);



    
// What is wrong with this code? 
// 1. First find the line that contains the problem. Write it down.
//! line 10 - getSum([1,2,3][5,66,23]);
//! line 2- const sum = 0;
// 2. Which debug method did you use to find the bug?
//!callstack
// 3. Explain the bug in your own words.
//! the getSum function arguments are undefined, this means they are not given values
//! sum cannot be const variable if we want it to be changed inside the function block.
// 4. Fix the code and submit it all.


function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    }
    getSum([1,2,3],[5,66,23]);


