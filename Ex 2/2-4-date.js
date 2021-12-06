
// let arr = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
// let month = new Array('January', 'February','March', 'April', 'May', "June", "July", "August", "September","October", "November", "December");
// let today = new Date();
// let day = today.getDate()
// let year = today.getFullYear()

// console.log(`Today is ${arr[today.getDay()]} the ${day} of ${month[today.getMonth()]}, ${year}`)



//! One More.

let today = new Date()
let days = {0:'Sunday', 1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday'}
let months = {0: 'January', 1: 'February', 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "August", 8: "September",
9: "October",  10: "November", 11: "December"}
let day = today.getDate()
let year = today.getFullYear()

console.log(`Today is ${days[today.getDay()]} the ${day} of ${months[today.getMonth()]}, ${year}`)