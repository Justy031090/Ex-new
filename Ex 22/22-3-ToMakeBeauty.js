const alpha = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];


function randomLetters() {
    for (let i=0; i<alpha.length; i++){
        i = Math.floor(Math.random() * 26)
        return alpha[i]
    }
}

function isValid(press){
    var letters = /^[a-zA-Z]{0,1}$/;
    if(press.match(letters)){
        return true;
        }
    else{
        return false;
    }
}
let expectedLetter = randomLetters()
let wrongLetters = [];
let btn = document.querySelector('.btn')
btn.style.visibility = 'hidden';
let gameOver = true;

window.addEventListener('keypress', function game(e){
    let keyGuessed = document.querySelector('.keys-guessed')
    let wrongEl = document.querySelector('.wrong-letters')
    let question = document.querySelector('.question')
    let text = document.querySelector('.text')
    let pressedKey = e.key.toLocaleLowerCase();

    if (gameOver == false) return;
    if (isValid(pressedKey) !== true)  {
        text.innerHTML = 'Please enter a valid letter !'
        text.style.color = 'red';
        return;
    }
    let isWrongLetter = !wrongLetters.includes(pressedKey) && isValid(pressedKey) === true; 
    if (isWrongLetter){
        wrongLetters.push(pressedKey);
        wrongEl.innerHTML += pressedKey;
    }
    else {
        text.innerHTML = 'Letter has already been guessed !'
        text.style.color = 'red';
        return;
    }
    if(expectedLetter !== pressedKey){
        text.innerHTML = 'Nope, wrong letter !'
        text.style.color = 'red';
        return;
    }
    else {
        gameOver = false;
        text.innerHTML = "You've guessed right !"
        text.style.color = 'green';
        question.innerHTML = expectedLetter;
        keyGuessed.innerHTML = 'play again ?'
        btn.style.visibility = 'visible'
        
    }
    btn.addEventListener('click', function rel(){
        gameOver = true;
        wrongEl.innerHTML = '';
        wrongLetters = [];
        expectedLetter = randomLetters();
        btn.style.visibility = 'hidden';
        question.innerHTML = '?';
        keyGuessed.innerHTML = 'Keys Guessed';
        text.style.color = 'black';
        text.innerHTML = 'guess a letter';
    });
            
});



function setWrongLettersText(text) {
    const wrongEl = document.querySelector('.wrong-letters');
    wrongEl.innerHTML = text;
}