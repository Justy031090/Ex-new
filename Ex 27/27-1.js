const isGreater = () => {
    num = Math.random()*20
    return new Promise ((resolve, reject) => {
        num >= 10 ? resolve() : reject() ;
    })
}

isGreater()
.then(()=>{
    console.log(`The number ${num} is greater or equals 10.`)
})
.catch(()=>{
    console.log(`The number ${num} is less than 10.`)
})

