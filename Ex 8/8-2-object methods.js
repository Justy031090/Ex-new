const myCountry = {
    country: 'Micronesia',
    capital:'Palikir',
    language:'English',
    population: '115,000 thousand',
    seaNeighbours: ['Palau', 'Guam', 'Marshall Islands', 'Papua New Guinea'],
    neighbours: 1,
    describe () {
    console.log(`${this.country} has ${this.population} people, their official language is ${this.language},
    they have ${this.seaNeighbours.length} neighbours and a capital called ${this.capital}`)
    },
    checkIsland() {
        myCountry.isIsland = (myCountry.neighbours > 0 ? true : false); 
        console.log(myCountry.isIsland)
        }
    }
console.log(myCountry.describe())
console.log(myCountry.checkIsland())
