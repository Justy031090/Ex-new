obj1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4' };
function swap(obj1) {
    const obj2 = {};               //]variable to store it in
    for (let key in obj1){        // loop for..in - loops in obj1 //!KEYS
        obj2[obj1[key]] = key;   // obj1[key] = the values of obj 1 
    }                           // obj2[keys equals values of obj 1] = object 1 keys (means they are new values.)
    return obj2;
}
console.log(swap(obj1))
