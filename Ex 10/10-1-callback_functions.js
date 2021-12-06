

//1.
isString = (string, callbkFn) => {
    callbkFn(string)
}
function func (passedString) {
    return typeof passedString === 'string' || passedString instanceof String ? console.log(passedString) : console.log(`${passedString} is not a string`)
}
isString("Let's check if its a string", func)
let notString = false
isString(notString, func)



//2.
let str = 'this is a string'

function firstWordUpperCase (string, callback) {
    string = string.split(' ');
    string[0] = string[0].toUpperCase();
    return callback(string)
}
function callback1 (string) {
    string = string.join('-')
    console.log(string)
    return string
}
firstWordUpperCase(str, callback1)

//3.
function callback2(newStr){
    newStr = newStr.join(' ')
    newStrLength = newStr.length
    console.log(`The total length of the given string is ${newStrLength}`)
    return newStrLength;
}
firstWordUpperCase(str, callback2)

// 4.
function letsLoop (match,num){
    match()
    while(match() !== num){
        for (let i =0; i<=num; i++){
            if (match() == num){
            console.log(`We looped ${i+1} times`)
            break;
            }
            if(match() == num && i == 0){
                console.log(`[if num >= 100, and random multiplied by 10000] trust me, You have to fill a lottery ticket ASAP`)
            }
        }
    }
}
match = () => {
    let random = Math.floor(Math.random()*10000)
    return random
}
letsLoop(match, 70)