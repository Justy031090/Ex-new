

// //1
let arr = [1, 7, 3, 0, -5 ,7 ,3 ,9]; 
for (let i = 0; i < arr.length; i++)
console.log(arr[i]);

// //2
let arr = [1, 7, 3, 0, -5 ,7 ,3 ,9];
arrayLength = (arr, value) =>{
    return arr.push(value);
}
console.log(arrayLength(arr, 2) - 1); // -1 to eliminate pushed value from original array length

//3
let arr = [1, 7, 3, 0, -5 ,7 ,3 ,9];
arraySum = (arr) =>{
    let total = 0;
    arr.forEach(counter = (element) => {
        total += element;
    });
    return total;
}
console.log(arraySum(arr));

//4
let multi = [1, 7, 3, 0, -5 ,7 ,3 ,9];
arrayMulti = (multi) =>{
    let sum = 1;
    for (let i = 0; i<multi.length; i++){
        sum = sum * multi[i]
    } return sum 
}
console.log(arrayMulti(multi))
