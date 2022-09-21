import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper, MovieName } from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
    const location = useLocation();
        return (
            <Container>
                {movies.map(({ original_title, id, backdrop_path }) => (
                    <CardWrapper key={id}>
                        <Link to={`${id}`} state={{ from: location }}>
                            <MovieName>{original_title}</MovieName>
                        </Link>
                    </CardWrapper>
                ))}
            </Container>
        );
};

export default MoviesList;