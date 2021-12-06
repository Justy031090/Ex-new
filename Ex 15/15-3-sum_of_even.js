function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
   }
   getSumOfEven([1,2,3,4,5,6,7,8,9,10]);

// What is wrong with this code? 
// 1. First find the line that contains the problem. Write it down.
//! line 2 - the return value is NaN
// 2. Which debug method did you use to find the bug?
//! callstack
// 3. Explain the bug in your own words.
//! summing all the even numbers in array, with the order given will be all the odd indexies
//! since index starts from [0]. + there are a total of 10 numbers in the array, which means the
//! maximum index will be [9]
// 4. Fix the code and submit it all.
// we want to sum all numbers in even cells in arrays of size 10: 
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30