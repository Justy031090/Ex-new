// a. Array of words
// a.1. Sort the array of strings from descending to ascending 
// order
// a.2. Sort the array of strings from ascending to descending 
// order
const foods = ["sabich", "falafel", "hummus", "pizza with extra pineapple"];

let sortABC = foods.sort();
console.log(sortABC);

let sortCBA = foods.sort().reverse();
console.log(sortCBA);

// b.1. Sort the array of strings from descending to ascending 
// order.
// b.2. Sort the array of strings from ascending to descending 
// order.
const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];
let sameCaseAsc = foodsWithUpperCase.join('-').toLocaleLowerCase().split('-')
sameCaseAscResult = sameCaseAsc.sort()
console.log(sameCaseAscResult)

let sameCaseDec = foodsWithUpperCase.join('-').toLocaleLowerCase().split('-')
let sameCaseDecResult = sameCaseDec.sort().reverse()
console.log(sameCaseDecResult)


// c.1. Sort the array of strings from the longest word to the 
// shortest word only using the sort function
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

sortByLength = words.sort((a,b)=> b.length - a.length);
console.log(sortByLength);

//From slack 
const mordiFoods = ['falafel','Sabich','sbich','hummus','pizza with extra pineapple'];
let sameAsc = mordiFoods
    mordiFoods.sort((a,b)=>{
        a = a.toLocaleLowerCase();
        b = b.toLocaleLowerCase();
        
        if (a.charAt() > b.charAt()) return 1;
        if (a.charAt() < b.charAt()) return -1;
        return 0;
    })
console.log(sameAsc)


let sameDec = mordiFoods
    mordiFoods.sort((a,b)=>{
        a = a.toLocaleLowerCase();
        b = b.toLocaleLowerCase();

        if (a.charAt() < b.charAt()) return 1;
        if (a.charAt() > b.charAt()) return -1;
        return 0;
    })
console.log(sameDec)

