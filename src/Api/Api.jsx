// export async function getTrendingToday()
//     const response = await axios.get(`/trending/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`);

// export async function getMovie(id)
//     const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

// export async function getCredits(id)
//     const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);

// export async function getReviews(id)
//     const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);

import axios from "axios";

const KEY = '1cd7fff4942b0a82f9d2c241c5225c79';
const DEFAULT_URL = 'https://api.themoviedb.org/3';
const BY_TRENDS = `${DEFAULT_URL}/trending/movie/week`;
const BY_SEARCH = `${DEFAULT_URL}/search/movie`;
const BY_ID = `${DEFAULT_URL}/movie/`;
const renderPoster = 'https://image.tmdb.org/t/p/w500';
export { KEY, DEFAULT_URL, BY_TRENDS, BY_SEARCH, BY_ID, renderPoster };


// export async function getMovie() {
//     await fetch(`${BY_TRENDS}?api_key=${KEY}&language=en`)
//         .then(response => response.json())
//         .then(response => {
//             return response.results;
//         })
//         .catch(error => {
//             return error.message
//         })
// }

export async function getMovies() {
    try {
        const data = await axios.get(
            `${BY_TRENDS}?api_key=${KEY}`
        );
        return data;
    } catch (error) {
        return error.message;
    }
}

//Fetch by Search
// export async function getBySearchMovies (formInput, page = 1) {
//     await fetch(`${BY_SEARCH}?api_key=${KEY}&query=${formInput}&page=${page}`)
//         .then(response => response.json())
//         .then(response => {
//             return (response.results)
//         })
//         .catch(error => { });
// }
export async function getBySearchMovies(formInput) {
    try {
        const data = await axios.get(
            `${BY_SEARCH}?api_key=${KEY}&query=${formInput}`
        );
        return data;
    } catch (error) {
        return error.message;
    }
}


// export async function getMovieById(id) {
//     await fetch(`${BY_ID}${id}?api_key=${KEY}`)
//         .then(response => response.json())
//         .then(response => {
//             return (response)
//         })
//         .catch(error => { });
// }
export async function getMovieById(id) {
    try {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`);
        return data;
    } catch (error) {
        return error.message;
    }
}

export async function getCast(id) {
    try {
        const response = await axios.get(`${BY_ID}${id}/credits?api_key=${KEY}`);
        return response;
    } catch (error) {
        return error.message;
    }
}

export async function getReviews(id) {
    try {
        const response = await axios.get(`${BY_ID}${id}/reviews?api_key=${KEY}`);
        return response;
    } catch (error) {
        return error.message;
    };
}