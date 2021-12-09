
const bod = document.querySelector('body');
const title = document.createElement('h2');
const joke = document.createElement('p');
const btn = document.createElement("BUTTON");
bod.appendChild(btn);
bod.appendChild(title);
bod.appendChild(joke);
btn.innerHTML = "Click for joke of the day";

async function getjoke () {
    try{
        const data = await (await fetch('https://api.jokes.one/jod')).json()
        title.innerHTML = data.contents.jokes[0].joke['title'];
        joke.innerHTML = data.contents.jokes[0].joke['text'];
    }
    catch(err){
        console.log('Something is wrong', err)
    }
}

btn.addEventListener('click', getjoke)
