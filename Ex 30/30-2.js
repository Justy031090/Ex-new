const movieContainer = document.querySelector('.movie-container');
const posterContainer = document.querySelector('.poster-container');
const search = document.querySelector('#search')
const btn = document.querySelector('.search-btn')
const rateDiv = document.querySelector('.ratings')

let details = {};
const getMovie = async function (input) {
    movieContainer.innerHTML = '';
    posterContainer.innerHTML= '';
    rateDiv.innerHTML = '';
    try{
    //getting movie
    const movieUrl = await (await fetch(`https://www.omdbapi.com/?t=${input}&apikey=4de19b18`)).url;
    const movie = await (await fetch(movieUrl)).json()
    if(movie.Response === 'False') {
        const forError = document.createElement('h2');
        movieContainer.appendChild(forError)
        forError.innerHTML = 'Movie not found !'
        forError.style.color = 'red'
        return
    }
    //getting poster
    const posterObj = movie.Poster;
    const posterUrl = await (await fetch(posterObj)).url;
    const poster =  await fetch(posterUrl);
    console.log(poster)
    if(poster.ok === false){
        const noPoster = document.createElement('p');
        movieContainer.appendChild(noPoster)
        noPoster.innerHTML = 'Poster will be added soon'
        noPoster.style.color = 'green'
    }
    else{
    const posterImg = document.createElement('img');
    posterImg.src = poster.url;
    posterContainer.appendChild(posterImg);
    }
    //movie details
    details = 
        {
        movieTitle: movie.Title,
        movieGenre:`Genre: ${movie.Genre}`,
        movieYear: `Year of release: ${movie.Year}`,
        moviePlot: `${movie.Plot}`,
        movieDirector: `Directed by ${movie.Director}`,
        movieActors: `Starring:  ${movie.Actors}`,
        }
    
    for (let key in details){
        let detailsEl = document.createElement('p')
        movieContainer.appendChild(detailsEl)
        detailsEl.innerText =  details[key]
    }
    //movie ratings
        const movieRatings =  movie.Ratings
        for(let i=0; i<movieRatings.length; i++){
            let ratingSite = document.createElement('p')
            rateDiv.appendChild(ratingSite)
            for (let key in movieRatings[i]){
                let ratingEl = document.createElement('span')
                ratingSite.appendChild(ratingEl)
                ratingEl.innerText = ` ${movieRatings[i] [key]}`
                
            }
        }

    }
    catch (e){
        console.log(e, 'Something gone wrong')
    }
    search.value = ''
    search.focus()
}

window.addEventListener('load', () => {
    search.focus()
})

btn.addEventListener('click', (e)=>{
    getMovie(search.value)
    search.value = ''
})

search.addEventListener('keydown', (e) =>{
    if (e.key === "Enter"){
    getMovie(search.value)
    }
})
