import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import BackLink from "../components/BackLink/BackLink";
import { getMovieById } from "../Api/Api";
import { useEffect, useState,  } from "react";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();

    useEffect(() => {
        async function fetchReviews() {
            const resReviews = await getMovieById(movieId)
            setMovie(resReviews);
        }
        fetchReviews();
    }, [movieId]);

    if (!movie) { return null };

    const backLinkHref = location?.state?.from ?? '/movies';
    
    const { backdrop_path, original_title, popularity, overview, genres } = movie.data;

    return (
        <>
            <BackLink to={backLinkHref}>Back to movies</BackLink>
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" width={600}/>
                <h2>Movie - {original_title} - {movieId}</h2>
                <p>User score: {popularity}</p>
                <h3>Ovwerview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <ul>{genres.map(({ id, name }) => <li key={id}> {name}</li>)}</ul>
            </div>
            <ul>
                <li>
                    <Link to="cast" state={{ from: location.state?.from }}>Cast</Link>
                </li>
                <li>
                    <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
                </li>
            </ul>
            <Outlet />
        </>
    )
};

export default MovieDetails;