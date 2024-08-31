const tmdbKey = '74890179d22c12692a9dbd9a72bdf43d';
const tmdbBaseUrl = 'https://api.themoviedb.org/3/movie/550?api_key=';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
    const genreRequestEndpoint = 'https://api.themoviedb.org/3/genre/movie/list'
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl} ${genreRequestEndpoint} ${requestParams}`;

    try{
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
        }
    } catch(error) {
        console.log(error);
    }

};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;