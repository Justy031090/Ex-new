
// 1.HTML 
	
// 	H1 - title Welcome to guess my letter
// 	Div - border CSS - will hold the correct guess or ?
// 	P - innerText change according to guess *color black
// 	Div - letters guessed - change when game ends
// 	Button/div - hidden until game ends
// 	Div - wrong letters guessed
	

// & p = ‘nope, ‘wrong letter’ *in red

// *If it is the right letter continue

// P = ‘Right letter’ in green

// Change question mark to the inputted letter
// Wrong letters div = would you like to play again?
// Yes button - visible 
// Pause all else - wait for  yes click 

// 	When ‘yes’ button is clicked reset all



const alpha = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];


randomLetters = () =>{
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
let random = randomLetters()
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
            if (!wrongLetters.includes(pressedKey) && isValid(pressedKey) === true && isValid !== 'enter'){
                wrongLetters.push(pressedKey);
                wrongEl.innerHTML += pressedKey;
                console.log(wrongLetters, wrongEl.innerHTML)
            }
            else {
                text.innerHTML = 'Letter has already been guessed !'
                text.style.color = 'red';
                return;
            }
            if(random !== pressedKey){
                text.innerHTML = 'Nope, wrong letter !'
                text.style.color = 'red';
                return;
            }
            else {
                gameOver = false;
                text.innerHTML = "You've guessed right !"
                text.style.color = 'green';
                question.innerHTML = random;
                keyGuessed.innerHTML = 'play again ?'
                btn.style.visibility = 'visible'
                
            }
            btn.addEventListener('click', function rel(){
                gameOver = true;
                wrongEl.innerHTML = '';
                wrongLetters = [];
                random = randomLetters();
                btn.style.visibility = 'hidden';
                question.innerHTML = '?';
                keyGuessed.innerHTML = 'Keys Guessed';
                text.style.color = 'black';
                text.innerHTML = 'guess a letter';
            });
            
});
