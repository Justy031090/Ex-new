const array= ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"]
function myFunc(array)  {
    const freq = {};
    let str = array.join('').toLowerCase().replace(/\s/g, '')
    for (let i=0; i<str.length; i++){
        let char = str.charAt(i);
        freq[char]? freq[char]++ : freq[char] = 1;
    }
    return freq;
}
console.log(myFunc(array));