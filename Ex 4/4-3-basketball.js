
let mikeTeam = new Array(7, 21, 28);      // choose the numbers
let johnTeam = new Array(31, 22, 20,);   // choose the numbers
let marryTeam = new Array(11, 10, 22,); //choose the numbers

let johnSum = 0;
for (let i = 0; i < johnTeam.length; i++){
    johnSum += johnTeam[i];
}
let mikeSum = 0;
for (let i = 0; i < mikeTeam.length; i++){
    mikeSum += mikeTeam[i];
}
let marrySum = 0;
for (let i = 0; i < marryTeam.length; i++){
    marrySum += marryTeam[i];
}
johnAvg = johnSum / johnTeam.length;
mikeAvg = mikeSum / mikeTeam.length;
marryAvg = marrySum / marryTeam.length;

if (johnAvg > mikeAvg && johnAvg > marryAvg){
    console.log(`John's Team has won with an average score of ${johnAvg} points !`)
}
if (marryAvg > mikeAvg && marryAvg > johnAvg){
    console.log(`Marry's Team has won with an average score of ${marryAvg} points !`)
}
else if (mikeAvg > marryAvg && mikeAvg > johnAvg){
    console.log(`Mike's team has won with an average score of ${mikeAvg} points !`)
}
else if (johnAvg === mikeAvg && johnAvg === marryAvg) {
    console.log(`Friendship has won - it's a draw ! all teams has an average score of ${mikeAvg} !`)
}
else ('Michael, you did a mistake in the code - go and fix it !'); 






