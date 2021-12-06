
function countryToLiveIn(language, isIsland, population, country){
    
    if(language == 'English' && isIsland == false && parseInt(population) < 50000000){
        console.log(`You should live in ${country}`);
    }
    else{
        console.log(`${country} does not meet your criteria`);
    }
}
let yes = true;
let no = false;
countryToLiveIn('English', yes , 25000000, 'Australia');