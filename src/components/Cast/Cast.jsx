import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../Api/Api"

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);
    
    useEffect(() => {
        getCast(movieId).then(setCast)
    }, [movieId]);

    if (!cast) {
        return null;
    }
    return (
        <div>
            <ul>
                {cast.data.cast.map(({ character, name, profile_path, id }) => profile_path &&
                    <li key={id}>
                        {<img src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="" width={150} />}
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </li>)}
            </ul>
        </div>
    );
};

export default Cast;