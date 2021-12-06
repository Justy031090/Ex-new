function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
    if ( str . charAt ( i ) === char ){
    counter += 1 ;
    }
    }
    return counter ;
    }
    countOccurrences ( "ini mini miny moe" , "n" )


// What is wrong with this code? 
// 1. First find the line that contains the problem. Write it 
// down.
//! line 5 - counter +1;
// 2. Which debug method did you use to find the bug?
//! callstack
// 3. Explain the bug in your own words.
//! every time the loop found a 'n' char it went to the counter as specified in 'if' statement
//! however, the value of counter was not added but zeroed again and again because there was no a = 
//! sign to accumulate every time it counted a char (it went back to 0 as declared)
// 4. Fix the code and submit it all.