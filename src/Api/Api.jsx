import axios from "axios";

const KEY = '1cd7fff4942b0a82f9d2c241c5225c79';
const DEFAULT_URL = 'https://api.themoviedb.org/3';
const BY_TRENDS = `${DEFAULT_URL}/trending/movie/week`;
const BY_SEARCH = `${DEFAULT_URL}/search/movie`;
const BY_ID = `${DEFAULT_URL}/movie/`;
const renderPoster = 'https://image.tmdb.org/t/p/w500';
export { KEY, DEFAULT_URL, BY_TRENDS, BY_SEARCH, BY_ID, renderPoster };

export { getBySearchMovies, getMovieById };

//Fetch by Search
async function getBySearchMovies(formInput, page = 1) {
    try {
        const data = await axios.get(
            `${BY_SEARCH}?api_key=${KEY}&query=${formInput}&page=${page}`
        );
        return data;
    } catch (error) { }
}

async function getMovieById(id) {
    try {
        const data = await axios.get(`${BY_ID}${id}?api_key=${KEY}`);
        return data;
    } catch (error) { }
}