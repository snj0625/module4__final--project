// API: https://www.omdbapi.com/?i=tt3896198&apikey=76fae4ba&s=fast

// This function generates the HTML for each movie card
function movieHTML(movie) {
    return `<div class="movie-card">
        <img src="${movie.Poster}" alt="${movie.Title}"/>
        <h3>${movie.Title}</h3>
        <p>Year: ${movie.Year}</p>
    </div>
    `;
}


// This function fetches movie data from the OMDB API based on the search title
async function fetchMovieData(searchTitle) {

const movieListEl = document.querySelector('.movie-list');

// Fetch movie data from the OMDB API   
const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=76fae4ba&s=${searchTitle}`);
const movieData = await movies.json();


// If the API returns a list of movies, we will generate the HTML for each movie and display it
if(movieData.Search){
movieListEl.innerHTML = movieData.Search.slice(0,6)
.map((movie) => movieHTML(movie)).join("");
}
else {
    movieListEl.innerHTML = `<p> No movies found</p>`;
}

}
//When the user types in the search box, this function will be called
async function onSearchMovie(event){
const title = event.target.value;

movies = await fetchMovieData(title);


}

function sortMovies(event) {
    
    const sortType = event.target.value;
    
    const movieListEl = document.querySelector('.movie-list');
    
    const movies = Array.from(movieListEl.children);

    if (sortType === 'a__z--order') {
        movies.sort((a, b) => a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent));
    } else if (sortType === 'z__a--order') {
        movies.sort((a, b) => b.querySelector('h3').textContent.localeCompare(a.querySelector('h3').textContent));
    } else if (sortType === 'new__old--order') {
        movies.sort((a, b) => b.querySelector('p').textContent.localeCompare(a.querySelector('p').textContent));
    }
    else if (sortType === 'old__new--order') {
        movies.sort((a, b) => a.querySelector('p').textContent.localeCompare(b.querySelector('p').textContent));
    }

    movieListEl.innerHTML = '';
    movies.forEach(movie => movieListEl.appendChild(movie));


}