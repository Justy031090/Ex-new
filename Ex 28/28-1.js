
const bod = document.querySelector('body');
const title = document.createElement('h2');
const joke = document.createElement('p');
const btn = document.createElement("BUTTON");
bod.appendChild(btn);
bod.appendChild(title);
bod.appendChild(joke);
btn.innerHTML = "Click for joke of the day";

function getjoke () {
    fetch('https://api.jokes.one/jod')
    .then(function(data) {
        return data.json();
    })
    .then(function (data){
        title.innerHTML = data.contents.jokes[0].joke['title']
        joke.innerHTML = data.contents.jokes[0].joke['text']
    })
    .catch(()=> alert('Something is wrong'))
}

btn.addEventListener('click', getjoke)
