

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

plus.addEventListener('click' ,function increase() {
    const par = document.querySelector('.txt');
    let fontSize = getComputedStyle(par).getPropertyValue("font-size")
    fontSize = parseFloat(fontSize);
    if (parseFloat(fontSize) < 100){
    par.style.fontSize =  (fontSize+5)+('px')
    }
});

minus.addEventListener('click' ,function decrase() {
    const par = document.querySelector('.txt');
    let fontSize = getComputedStyle(par).getPropertyValue("font-size")
    fontSize = parseFloat(fontSize);
    if (parseFloat(fontSize) > 6 ){
    par.style.fontSize =  (fontSize-3)+('px')
    }
    console.log(fontSize)
});
