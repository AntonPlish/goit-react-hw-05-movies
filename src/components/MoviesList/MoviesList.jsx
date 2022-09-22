import { Link } from "react-router-dom";
import { Container, CardWrapper, MovieName } from "./MoviesList.styled";

const MoviesList = ({ movies }) => {
    // const location = useLocation();
        return (
            <Container>
                {movies.map(({ original_title, id }) => (
                    <CardWrapper key={id}>
                        <Link to={`movies/${id}`} state={{ from: '/home' }}>
                            <MovieName>{original_title}</MovieName>
                        </Link>
                    </CardWrapper>
                ))}
            </Container>
        );
};

export default MoviesList;