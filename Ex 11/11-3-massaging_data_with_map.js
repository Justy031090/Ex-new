const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
];

// 1. 
getNames = () => {
    const names =  data.map(names => names.name)
    return names;  
}
// console.log(getNames())


//2. 
olderThanThirty = () => {
        return data.filter((user) => {
            const bd = user.birthday.split('-')
            const birthday = bd[2]
            return  parseInt(birthday) < 1990 ? user : false
        });
}
// console.log(olderThanThirty())

// 3.
getFoods = () =>{
    const foods = {};
    data.forEach(user => {
        user.favoriteFoods.fish.forEach(freshFish => {
            if (foods[freshFish]) {
                foods[freshFish] += 1;
            }
            else foods[freshFish] = 1;
        })
    })
    data.forEach(user=>{
        user.favoriteFoods.meats.forEach(freshMeat => {
            if (foods[freshMeat]) {
                foods[freshMeat] += 1;
            }
            else foods[freshMeat] = 1;
        })
    });
    return foods;
}
console.log(getFoods(data))