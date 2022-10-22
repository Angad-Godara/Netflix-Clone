const API_KEY = '25986140e0d34941636f99dbf6f5310e';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&width_networks=213`,
    fetchTopRated: `/discover/movie?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&width_genres=99`,
}

export default requests;

// https://api.themoviedb.org/3/trending/all/week?api_key=25986140e0d34941636f99dbf6f5310e&language=en-US