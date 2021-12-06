let attackList = ['pew', 'kick', 'knock', 'special']

function Pokemon(pokemonName, pokemonType, pokemonAttackList){
this.name = pokemonName;
this.type = pokemonType;
this.attackList = pokemonAttackList;
}
Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you`, this.name)
}
Pokemon.prototype.attackType = function (i) {
    console.log(`${this.name} used his ${attackList[i]} attack`)
}

let poke1 = new Pokemon('pikachu', 'electricity', attackList);
let poke2 = new Pokemon('jigglypuff', 'fairy', attackList);
let poke3 = new Pokemon('Alakazam', 'Psychic', attackList);

poke1.attackType(1)

