import { Link } from "react-router-dom";
import { Container, CardWrapper, MovieName } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
    if (movies.length > 1) {
        return (
            <Container>
                {movies.map((movie) => (
                    <CardWrapper key={movie.id}>
                        <Link to={`${movie.id}`}>
                            <MovieName>{movie.original_title}</MovieName>
                        </Link>
                    </CardWrapper>
                ))}
            </Container>
        );
    };
};