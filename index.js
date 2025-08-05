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

// Show the loading spinner while fetching data
const movieListEl = document.querySelector('.movie-list');
movieListEl.classList.add('loading__icon--spinner'); 

// Fetch movie data from the OMDB API   
const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=76fae4ba&s=${searchTitle}`);
const movieData = await movies.json();

// Hide the loading spinner after fetching data             
movieListEl.classList.remove('loading__icon--spinner');


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
