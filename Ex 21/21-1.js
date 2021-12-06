
const age = document.querySelector('#age-value')
const sub = document.querySelector('#submit')
const checkAge = document.querySelector('.check-age')

sub.addEventListener('click', function oldEnough(){
    if (age.value >= 18){
        return alert ('you can drink');
    }
    else if (age.value <18) {
        alert("you're too young");
    }
    else {
            alert("Invalid")
        }
    

});