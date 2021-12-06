
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');
let num6 = document.getElementById('num6');

num1.setAttribute('class', 'inputBox')
num2.setAttribute('class', 'inputBox')
num3.setAttribute('class', 'inputBox')
num4.setAttribute('class', 'inputBox')
num5.setAttribute('class', 'inputBox')
num6.setAttribute('class', 'inputBox')

// num1.setAttribute('onkeyup', "focusing(this, 'num2')")
// num2.setAttribute('onkeyup', "focusing(this, 'num3')")
// num3.setAttribute('onkeyup', "focusing(this, 'num4')")
// num4.setAttribute('onkeyup', "focusing(this, 'num5')")
// num5.setAttribute('onkeyup', "focusing(this, 'num6')")


// function focusing(box, nextBox){
//     let len = box.value.length;
//     let maxLen = box.getAttribute('maxLength');
//     if ( len == maxLen) {
//         document.getElementById(nextBox).focus();
//     }
// }

const inputs = document.querySelectorAll('.inputBox');
const form = document.querySelector('form')

inputs.forEach((input, index)=> {
    input.addEventListener('paste' ,(event) => {
        const paste = event.clipboardData.getData('text');
        const pasteArr = paste.split('');
        for (let i=0; i<pasteArr.length; i++){
            inputs[index + i].value = paste[i];
        }
    });

    input.addEventListener('keyup' ,(event) => {
        if (input.nextElementSibling && input.value){
            input.nextElementSibling.focus();
        }
        const allValues = [...inputs].every((inputEl) => inputEl.value);
        if (allValues) {
            form.submit();
        }
    });
});

