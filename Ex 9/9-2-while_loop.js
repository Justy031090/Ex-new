let population = [9, 144, 1402, 126];

populationPercentagesFor = (populations) =>{
    let percetages = [];
    for (let i=0; i<populations.length; i++){
       percetages[i] = [((populations[i] / 7900) *100).toFixed(2)]
    }; return percetages;
};

populationPercentagesWhile = (populations) =>{
    let percetages = [];
    let i =0 ;
    while ( i < populations.length){
       percetages[i] = [((populations[i] / 7900) *100).toFixed(2)]
        i++
    } return percetages;
};
console.log(populationPercentagesFor(population))
console.log(populationPercentagesWhile(population))
console.log('The same result, however - the "for" loop looks more mature and elegant.')
