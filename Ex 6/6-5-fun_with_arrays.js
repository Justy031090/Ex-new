

// • Create a copy of an array that will effect the original 
// array if modified.

let arr = [];
arr[99] = 1

//fill with the same object
console.log(arr.fill(1,0 ,100));


//fill with No. ranged 1-100
console.log(Array.from({length: 100}, (x, i) => i+1));


// 3. Convert only values of an object into one array.
let myObj = {1:'5', 2:'6',3:'7',4:'8', 5:'9', 6:'10',7:'10'};
const convert = Object.values(myObj);
console.log(Object.values(myObj));


// 4. Convert an array into one object.
let arr2 = [5, 2, 5, 6, 8, 9, 12, 'spicy', 'sweet', 777]
obj = Object.assign({}, arr2);
console.log(obj);

// 5. Find out if an array is an array.
console.log(Array.isArray(arr2))

// 6. Copy an array.
let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3.slice();
console.log(arr4);

// • Create a copy of an array that won’t effect the original
// array if modified.
const arr5 = [1, 2, 3, 4, 5];
let arr6 = arr5.slice()
arr6.push(5)
console.log(arr5);
console.log(arr6);

// • Create a copy of an array that will effect the original 
// array if modified.
let arr7 = [1, 2, 3, 4, 5];
let arr8 = arr7
arr8.push(5);
console.log(arr7);
console.log(arr8);