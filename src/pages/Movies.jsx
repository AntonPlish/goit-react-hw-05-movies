// import React, { useState, useEffect } from "react";
// import { MoviesList } from "../components/MoviesList";

// const KEY = '1cd7fff4942b0a82f9d2c241c5225c79';
// const DEFAULT_URL = 'https://api.themoviedb.org/3';
// const BY_TRENDS = `${DEFAULT_URL}/trending/movie/week`;

// export default function Movies() {
    
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState([]);

//     useEffect(() => {
//             fetch(`${BY_TRENDS}?api_key=${KEY}&language=en`
//             )
//                 .then(response => response.json())
//                 .then(response => {
//                         setMovies(response.results)
//                 })
//                 .catch(newError => {
//                         setError(newError);
//                 });
//     }, [movies]);
//         return (
//             <main>
//                 <MoviesList movies={movies} />
//             </main>
//         )
// };
