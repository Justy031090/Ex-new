
// Neighbour: Canada
// Neighbour: Mexico
// Neighbour: Spain
// Neighbour: Norway
// Neighbour: Sweden
// Neighbour: Russia
const listOfNeighbours = [
    ["Canada", "Mexico"], 
    ["Spain"],
    ["Norway", "Sweden", "Russia"], ];
loopingArrays = (countries) =>{
    for (let i = 0; i<countries.length; i++){
        for (let j =0; j<countries[i].length; j++)
        console.log(countries[i][j])
    } 
}
loopingArrays(listOfNeighbours)
