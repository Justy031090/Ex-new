numSibling = window.prompt('How many siblings do you have?')
numSib2 = Number(numSibling);
if (numSib2 === 1){
    console.log('1 sibling');
}
else if (numSib2 > 1){
    console.log('More than 1 sibling');
}
else {
    console.log('No siblings');
}
// 6. Change == to ===, and test the code again, with the
// same values of 'numSiblings'. Notice what happens when
// there is exactly 1 sibling! Why is this happening? 
//!Number vs String different types = false.

// 8. Reflect on why we should use the === operator and
// type conversion in this situation.