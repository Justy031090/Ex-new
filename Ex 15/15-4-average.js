function calcAverage (arr){
    var sum = 0;
    for ( var i = 0 ; i < arr .length; i ++ ){
    sum += arr [ i ];
    }
    return sum / arr.length ;
    }
    calcAverage ([ 85 , 90 , 92 ])



    // What is wrong with this code? 
    // 1. First find the line that contains the problem. Write it 
    // down.
    //! line 2 - sum is not defined. 
    //! line 6 - we return the sum value as we got it after the looping, 

    // 2. Which debug method did you use to find the bug?
    //! callstrack
    // 3. Explain the bug in your own words.
   //! we try to loop 'sum' and add to it numberb, which gives us NaN.

   //! - we return the sum value as we got it after the looping, if we want to get the average
   //! value, we are missing '/' by the length of the array.
    // 4. Fix the code and submit it all.