

const myArray = ['hello', 'this','is','my', 'promise']
const wrongArray = ['hello', 'this','is','my', 'promise',2]

function makeAllCaps(arr) {
    return new Promise ((resolve, reject) => {
        for(let i=0; i<arr.length; i++){
            if (typeof arr[i] !== 'string') {
            reject();
            }
            arr[i] = arr[i].split('')
            arr[i][0] = arr[i][0].toUpperCase() 
            arr[i] = arr[i].join('')
        }
        resolve (arr);
    })
}

function sortWords(arr){
    return new Promise((resolve, reject) =>{
        for(let i=0; i<arr.length; i++){
            if (typeof arr[i] !== 'string'){
                reject();
                }
        }
            resolve (arr.sort())
    })
}


makeAllCaps(myArray)
.then(()=>{
    console.log('capitalized')
    sortWords(myArray)
    .then(()=>{
        console.log('capitalized & sorted')})
})
.catch(()=>{
    console.log('Something is not a string !')
})

// sortWords(myArray)
// .then(()=>{
//     console.log('sorted')
//     makeAllCaps(myArray)
//     .then(()=>{
//         console.log('capitalized & sorted')})
// })
// .catch(()=>{
//     console.log('Something is not a string !')
// })