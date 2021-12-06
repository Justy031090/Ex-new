// 3. Build your own reduce method with the help of 
// prototypes

const ages = [5,2,15,92,55,82,89,14,18,21,27,35,45,48,33];

Array.prototype.canDrink = function () {
    let filtered = [];
    for (let i=0 ; i < this.length ; i++){
        if(this[i] >= 18){
        filtered.push(this[i])
        }
    }
    return filtered;
}
// console.log(ages.canDrink())

Array.prototype.myFind = function (toFind) {
    let found = '';
    for (let i=0 ; i < this.length ; i++){
        if(this[i] === toFind){
        found = toFind;
        return found;
        }
    }  
    if (found = '');
    return undefined
}
// console.log(ages.myFind(2))
