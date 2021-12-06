const candyStore = {
    candies: [
    {
    name: "mint gum",
    id: "as12f",
    price: 2,
    amount: 2
    },
    {
    name: "twix",
    id: "5hd7y",
    price: 5,
    amount: 4
    },
    ],
    cashRegister: 200
}   

// 1. Implement the following getCandy function:
// The function should return the candy element with the specified id.
function getCandy(candyStore, id){ 
    const candyById = candyStore.candies.find( candy=> {
        if (candy['id'] === id) return candy;
    })
    return getId
}
// console.log(getCandy(candyStore, '5hd7y'))

// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified 
// id.
function getPrice(candyStore, id){ 
    const getCandyPrice = candyStore.candies.find(candy =>{
        if(candy['id'] === id) return candy.price;
    }) 
    return getCandyPrice.price;
    }
// console.log(getPrice(candyStore,'5hd7y'))

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a 
// default amount of 1. The function will not return anything.

function addCandy(candyStore, id, name, price){
    candyStore = candyStore.candies.push(
        {
        name:name,
        id:id,
        price:price,
        amount: 1
        
        }
    )
    return candyStore; 
}
console.log(addCandy(candyStore, '4bc3d', 'yummyGum', 2))

console.log(candyStore)
    