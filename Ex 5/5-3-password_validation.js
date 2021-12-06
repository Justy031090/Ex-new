
// 1) Create a function that uses a if/else conditional 
// expression.
function pass1(password1){
    if (password1.length >= 7){
        console.log('Strong Password')
    }
    else {
    (console.log('Weak Password'))
    }
}
pass1('2221155552');
// 2. Create a function that uses a ternary conditional 
// expression.
function pass2(password2){
    password2.length >= 7 ? console.log('Strong Password'):console.log('Weak Password');
}
pass2('124444')

// 3. Create a function that uses a && logical operator.
function pass3 (password3){
    if (password3.length >= 7 && password3.indexOf(' ') == -1){
    console.log('Strong Password')
    }
    else{
        console.log('Weak password')
    }
}
pass3('1667 111111')
// 4. Create an “advanced” password validation function that 
// takes a password string as an argument.
// If the password length is more than 7 characters long and 
// has at least one capital letter return “Very Strong”.
// If the password length in only 7 characters long return 
// “Strong”.
// If the password length is less than 7 characters long return 
// “Weak”
// Use only a ternary conditional expression.
//! >7 = strong , <7 = weak

function pass4 (password4){
    if (password4.length > 7 && password4.match(/[A-Z]/g)){
    console.log('Very Strong Password')
    }
    else if(password4.length >= 7){
        console.log('Strong Password')
    }
    else{
        console.log('Weak password')
    }
}
pass4('123A567S')

function pass5 (password5){
    let veryStrongPassword = password5.length > 7 && password5.match(/[A-Z]/g)
    let strongPassword = password5.length = 7
    let weakPassword = password5.length < 7
    switch(password5){
    case veryStrongPassword: 
        password5.length > 7 && password5.match(/[A-Z]/g) ? console.log('Very Strong Password') : 'dumy'
        break;
    case strongPassword: 
        password5.length = 7 ? console.log('Strong Password'): 'dumy'
        break;
    case weakPassword: 
        password5.length < 7 ? console.log('Weak Password') : 'dumy'
        break;
    }
}
pass5('123456A78')