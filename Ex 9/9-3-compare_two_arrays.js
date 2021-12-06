// You are given two arrays:
const food = 
["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = 
["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"]

whatsYummy = (food, food1) => {
    let arr = [];
    for (let i=0; i<food.length; i++){
        for(let j=0; j<food1.length; j++){
            if ( food[i] == food1[j]) {
                arr.push(food[i])
            }
        } 
    } return arr.length > 0 ? arr : false
} 
console.log(whatsYummy(food, food1))