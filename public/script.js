const tmdbKey = '74890179d22c12692a9dbd9a72bdf43d';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

//We worked on this
const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
 
 try {
  const response = await fetch(urlToFetch)
  if (response.ok){
    const jsonResponse = await response.json()
    const genres = jsonResponse.genres;
    return genres;
  }
 } catch(error) {
  console.log(error)
 }

};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie'
  const requestParams = `?api_key=${tmdbKey}&with_genre=${selectedGenre}`
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`

  try{
  const response = await fetch(urlToFetch)
    if(response.ok){
      const jsonResponse = await response.json()
      const movies = jsonResponse.results;
      return movies
    }
  } catch(error){
    console.log(error)
  }

};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`
  const requestParams = `?api_key=${tmdbKey}`
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`

  try{
    const response = await fetch(urlToFetch)
    if(response.ok){
      const movieInfo = response.json()
      return movieInfo;
    }
  }
  catch(error){
    console.log(error)
  }

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

  const movies = await getMovies()
  const randomMovie = getRandomMovie(movies)
  const info = await getMovieInfo(randomMovie)
  displayMovie(info)
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;



/**TO IMPROVE THIS CODE: 
 * Checkout the displayMovie() function in helpers.js to use the DOM to rearrange the layout of information on the page. Try displaying different types of information like cast, or release date.
 * Create a way to store a user’s liked and disliked movies and display this list on the page.
 * Our API call inside of getMovies() returns many pages of results, but currently our program only randomizes results from the first page. To randomize our results even more, update getMovies() so that movies contains results from a random page instead of the first page.
 * 
 * /