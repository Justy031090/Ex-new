
const cont = document.querySelector('.container');
const light = document.querySelector('.second-bulb');
const dark = document.querySelector('.first-bulb');
light.style.visibility = ('hidden')

cont.addEventListener('click', function lighten(){
    light.style.visibility = ('visible')
    dark.style.visibility = ('hidden')
    setTimeout(function() {
        light.style.visibility = ('hidden');
        dark.style.visibility = ('visible')
    }, 100);
});

