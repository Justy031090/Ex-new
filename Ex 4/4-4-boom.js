function numbers(n){
    for (let i = 1; i <= n; i++) {
        if (String(i).includes('7') && (i % 7 === 0)){
            console.log('Lucky Seven')
        }
        else if (String(i).includes('7') || (i % 7===0)){
            console.log('BOOM')
        }
        else {
            console.log(i)
        }
    }
}
numbers(100);