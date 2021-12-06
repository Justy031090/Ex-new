
// Without running the code below, explain in your own words what the result
// of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them

//1.
function funcA() {
    console.log(a);        // a wasnt declared yet. will give us undefined(VAR). We should log it after line 10.
    console.log(foo());    
    var a = 1;
    function foo() {
    return 2;
    }
}
funcA();


//2.
var fullName = 'John Doe';   // supposed to be inside obj.prop.fullName [?] won't get logged with the function getFullName
var obj = {
 fullName: 'Colin Ihrig', // supposed to be inside prop.fullname [?] won't get logged with the function getFullName
 prop: {
 fullName: 'Aurelio De Rosa',
 getFullName: function () {
 return this.fullName;
 }
 }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName; // test declared outside the obj scope
console.log(test()); // will log undefined bcz of this




//3.
function funcB() {
    let a = b = 0;
    a++;
    return a;
   }
   funcB();
   console.log(typeof a); // declared inside the function brackets. will be undefined.
   console.log(typeof b); // b was never declared. b = 0 in global scope = typeof number.

//4.
function funcC() {
    console.log("1");    // '1' will not be logged. 2 will be logged twice instead ,
   }                          // because the function was re-declared, and JS hoisting 
   funcC();                   // it first will read all the script, then execute, means
   function funcC() {        // the last funcC declared will be executed in both cases.
    console.log("2");
   }
   funcC();


//5.
function funcD1() {
    d = 1;            // d is not declared.
   }
   funcD1();
   console.log(d);  // d is outside the function brackets, means it will log undefined if executed.
   function funcD2() {
    var e = 1;           
   }
   funcD2();
   console.log(e);      // e was declared inside funcD2 brackets, means it exists only there.


//6.
function funcE() {
    console.log("Value of f in local scope: ", f);  
   }
   console.log("Value of f in global scope: ", f); // f declared after the console.log, it will be undefined.
   var f = 1; // needs to swap places with line 72.
   funcE();