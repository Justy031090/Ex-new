//! 144 rus, 1402 chin, 9 israel, 126 japan
let populations = [9, 144, 1402, 126];
populationPercentages = (populations) =>{
    let percetages = [];
    for (let i=0; i<populations.length; i++){
       percetages[i] = [((populations[i] / 7900) *100).toFixed(2)]
    }; return percetages;
};
console.log(populationPercentages(populations))