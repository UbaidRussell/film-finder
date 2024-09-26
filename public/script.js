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

const getMovieInfo = () => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`
  const requestParams = `?api_key=${tmdbKey}`
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`
  
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