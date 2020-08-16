const baseURL = 'https://api.themoviedb.org/3'
const API_KEY = 'f175e530c38760bab52d4d1626db82c6'


const fetchTrending = `${baseURL}/trending/all/week?api_key=${API_KEY}&language=es-ES`
//const fetchPopularMovies = `${baseURL}/movie/popular?api_key=${API_KEY}&language=es-ES`
const fetchTopRated = `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=es-Es`
const fetchNetflixOriginals = `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-ES`
const fetchActionMovies = `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=es-ES`
const fetchHorrorMovies = `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=es-ES`
const fetchRomanceMovies = `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=es-ES`

export const FetchTrending = () => fetchTrending
//export const FetchPopularMovies = () => fetchPopularMovies
export const FetchTopRated = () => fetchTopRated
export const FetchNetflixOriginals = () => fetchNetflixOriginals
export const FetchActionMovies = () => fetchActionMovies
export const FetchHorrorMovies = () => fetchHorrorMovies
export const FetchRomanceMovies = () => fetchRomanceMovies
