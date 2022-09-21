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