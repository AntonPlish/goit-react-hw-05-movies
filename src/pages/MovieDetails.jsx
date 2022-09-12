import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getMovieById } from "../Api/Api";

export const MovieDetails = () => {
    const { id } = useParams();
    const movie = getMovieById(id);
    return (
        <main>
            <div>
                <h2>Movie - {movie.name} - {id}</h2>
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