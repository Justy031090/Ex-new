function findSmallest(a, b, c){
    if (a > b > c){
    return c;
    } else if (a > c > b) {
    return a;
   } else {
    return b;
    }
   }
   console.log(findSmallest(52,66, 2))

// What is wrong with this code? 
// 1. First find the line that contains the problem. Write it down.
//! line 10 (or line 1) - there's a missing 'l' in 'smalest'

// 2. Which debug method did you use to find the bug?
//!callstack
// 3. Explain the bug in your own words.
//! the missing letter in the execution of the function made it be undefined.
// 4. Fix the code and submit it all.