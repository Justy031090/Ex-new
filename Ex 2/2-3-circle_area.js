// A=PIr^2

function circleArea(radius){
    let pai = Math.PI
    let area = radius * radius * pai;
    console.log(`area = ${radius} * ${radius} * ${pai}`);
    return area;
}
console.log(circleArea(3).toFixed(2));

