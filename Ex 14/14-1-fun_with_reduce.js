// Write the following functions using the reduce built-in function. 

let testingArray = [2, 3, 5, 9, 22, 57, 102, 55,  72]

// 1. max
const max = testingArray.reduce((prev, current) => {
        if (current > prev)
            return current; 
        else return prev;
});
// console.log(max)
const max2 = testingArray.reduce((prev, current)=>{
    return Math.max(prev, current)
})
// console.log(max2)

// 2. sum of even numbers
const evenSum = testingArray.reduce((total,current)=>{
let sum = current % 2 === 0 ? total += current : total
return sum;
});
// console.log(evenSum)

// 3. average

const average = testingArray.reduce((total, current)=>{
    let sum = total + current
    return sum
}) / testingArray.length
// console.log(average)