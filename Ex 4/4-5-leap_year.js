// Instructions
// Create a JS function to determine whether or not a given year is a leap year. 
// The function should take a year as an argument:
// 1) Determine whether or not it is a leap year
// * If the given year is a leap year, the program should print "It is indeed a 
// leap year", otherwise the program will print "This is not a leap year."

function leap(year){
    if((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0 )) {
        console.log('It is indeed a leap year.')
    }
    else {
        console.log('This is not a leap year.')
    }
}
console.log(leap(2012));

