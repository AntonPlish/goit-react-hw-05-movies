import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from "../../Api/Api";
import { ListWrapper, List } from "./HomeComponent.styled"

export default function HomeComponent() {
    const [trendsMovies, setTrendsMovies] = useState([]);

    useEffect(() => {
        async function fetchTrending() {
            const data = await getMovies();
            setTrendsMovies(data.data.results);
        }

        fetchTrending();
    }, []);

    return (
        trendsMovies.length > 0 && (
            <List>
                {trendsMovies.map(trendsMovie => (
                    <ListWrapper key={trendsMovie.id}>
                        <Link to={`movies/${trendsMovie.id}`} state={{ from: '/home' }}>{trendsMovie.title}</Link>
                    </ListWrapper>
                ))}
            </List>
        )
    );
}