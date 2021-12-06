// Create a webpage that has part of an application process for a job. 
// This page should have a text area field and a button. Your user must enter at 
// least 100 characters before clicking the button. If he didn’t, please give him 
// the appropriate message. (using alert is forbidden

let avada = 's '
console.log(avada.length)



const header = document.querySelector('.question');
const text = document.querySelector('.txt');
const sub = document.querySelector('.sub');
const tell = document.querySelector('.tell-more')
const thank = document.querySelector('.thank')

sub.addEventListener('click', function len(){
    if (text.value.length < 100)
    tell.style.visibility = ('visible')
    setTimeout(function() {
        tell.style.visibility = ('hidden')
    }, 1000);
    if ((text.value.length >= 100)){
        thank.style.visibility = ('visible')
        setTimeout(function(){
            thank.style.visibility = ('hidden')
        }, 1000);
    }
});
