// Create an object with a name property. The object should 
// also have a method that prints its name, and another 
// method that prints its name after a second with the help of 
// setTimeOut. in this exercise, you are not allowed to use 
// arrow functions.


const myObj = {
    name: 'Mika',
    printOne: function (){
        console.log(this.name)
    },
    printTwo: function(){
        setTimeout (function (){ 
            //! if made an arrow function, it wouldnt have its own "this, so it would lookup"
            console.log(this.name)
        }.bind(this) , 1000) 
    }
}
myObj.printOne()
myObj.printTwo()
