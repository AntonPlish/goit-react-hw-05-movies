import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { getMovieById } from "../Api/Api";
import { useEffect, useState,  } from "react";

const MovieDetails = () => {
    const { id } = useParams();
    const { movie, setMovie } = useState(null);
    const location = useLocation();

    useEffect(() => {
        getMovieById(id).then(setMovie);
    }, [id, setMovie]);

    if (!movie) { return null };

    const { backdrop_path, original_title, popularity, overview, genres } = movie;

    const backLinkHref = location.state?.from ?? "/movies";
    
    return (
        <main>
            <BackLink to={backLinkHref}>Back to movies</BackLink>
            <div>
                <div><img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" /></div>
                <h2>Movie - {original_title} - {id}</h2>
                <p>User score: {popularity}</p>
                <h3>Ovwerview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>{genres.map(({ id, name }) => <li key={id}> {name}</li>)}</ul>
            </div>
            <ul>
                <li>
                    <Link to="cast">Get to know the cast</Link>
                </li>
                <li>
                    <Link to="reviews">Go through the reviews</Link>
                </li>
            </ul>
            <Outlet />
        </main>
    );
};

export default MovieDetails;