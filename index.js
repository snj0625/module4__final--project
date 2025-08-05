// API: https://www.omdbapi.com/?i=tt3896198&apikey=76fae4ba&s=fast
function movieHTML(movie) {
    return `
    <div class="movie-card">
        <img src="${movie.Poster}" alt="${movie.Title}"/>
        <h3>${movie.Title}</h3>
        <p>Year: ${movie.Year}</p>
    </div>
    `;
}

async function fetchMovieData(searchTitle) {
const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=76fae4ba&s=${searchTitle}`);
const movieData = await movies.json();
const movieListEl = document.querySelector('.movie-list');

if(movieData.Search){

movieListEl.innerHTML = movieData.Search.slice(0,6)
.map((movie) => movieHTML(movie)).join("");
}

else {
    movieListEl.innerHTML = `<p> No movies found</p>`;
}
}

async function onSearchMovie(event){
const title = event.target.value;
fetchMovieData(title);
}

