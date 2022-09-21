import { useSearchParams } from "react-router-dom";
import { useEffect, useState,  } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { getBySearchMovies } from "../Api/Api";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get("query") ?? "";
    
    // const visibleMovies = movies.filter((movie) =>
    //     movie.name.toLowerCase().includes(movieName.toLowerCase())
    // );
    
    useEffect(() => {
        if (!movieName) return;
        getBySearchMovies(movieName).then(setMovies)
    }, [movieName]);

    if (!movies) {
        return null;
    }

    const searchName = name => {
        setSearchParams(name !== "" ? { query: name } : {});
    }

    return (
        <main>
            <SearchBox onSearch={searchName} />
            {movies.data?.results && <MoviesList movies={movies.data.results}/>}
        </main>
    );
};

export default Movies;

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
