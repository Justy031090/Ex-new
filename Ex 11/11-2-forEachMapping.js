// 1. 
testArray = [2,2,5,5,6,7,1,9,0]
doubleValue = (intArr) => {
    let newArr = [];
    intArr.forEach(element => {
    newArr.push(element*2);
    }); return newArr;
} 
// console.log(doubleValue(testArray)) 
    


// 2.
onlyEvenValues = (intArr) => {
    let newArr = [];
    intArr.forEach(element => {
    element % 2 == 0 ? newArr.push(element) : false
    }); return newArr;
}
// console.log(onlyEvenValues(testArray))


// 3. 
let stringArr = ['this', 'is', 'a', 'string', 2, 5]

showFirstAndLast = (intArr) => {
    let newArr = [];
    intArr.forEach(element => { 
        typeof element === 'string' ? newArr.push(element) : false
    });
    firstAndLast = newArr.slice(0,1) + ' ' + newArr.slice(-1);
    return firstAndLast.split(' ');
}
// console.log(showFirstAndLast(stringArr))


// 4. 
let testString = 'This is a test string for vowels & 0n3 u'

function filterItems(stringArr, letter) {
    return stringArr.filter(function(letVowel) {
        return letVowel.indexOf(letter) !== -1
    })
}
vowelCount = (string) => {
    string = string.toLowerCase().split('');
    let myobj = {
    'a' : filterItems(string, 'a').length,
    'e' : filterItems(string, 'e').length, 
    'i' : filterItems(string, 'i').length, 
    'o' : filterItems(string, 'o').length, 
    'u' : filterItems(string, 'u').length, 
    }
    return myobj
}
// console.log(vowelCount(testString));

// 5. 

let stringFor5 = "This string made for testing"
capitalize = (string)=> {
    string = string.toLowerCase().split(' ')
    string.forEach(function(word,i) {
        string[i] = word[0].toUpperCase() + word.substring(1)
    }); return string.join(' ')
}
// console.log(capitalize(stringFor5))

// 6. Write a function called shiftLetters that takes a string as 
// an argument and return’s an encoded string with each 
// letter shifted down the alphabet by one.

shiftLetters = (str) => {
    str = str.toLowerCase();
    let result = '';
    let charcode = 0;
    for (let i = 0; i < str.length; i++) {
        charcode = (str[i].charCodeAt()) -1;
        if (charcode === 96){
            charcode = charcode + 26;
        }
        if (charcode === 31){
            charcode = charcode +1 
        }
        result += String.fromCharCode(charcode)
    }return result;
} 
// console.log(shiftLetters('abc def'));
// 7. Create a function called swapCase that takes a string as 
// an argument and returns a string that every other word is 
// capitalized. (you can use the fifth’s exercise's function to 
// keep it dry

swapCase = (str) =>{
    str = str.split(' ')
    console.log(str)
    let newArr1 = [];
    str.forEach(function (element, i) {
    i % 2 == 0 ? newArr1.push(element.toUpperCase()) : newArr1.push(element)
    }); return newArr1.join(' ')
}
console.log(swapCase('this isssss assssss string'))

