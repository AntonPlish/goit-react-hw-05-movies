import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../Api/Api"

const Review = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState(null);
    
    useEffect(() => {
        getReviews(movieId).then(setReview)
    }, [movieId]);

    if (!review) {
        return null;
    }

    return (
        <div>
            <ul>
                {review.data.results.map(({ id, author, content }) =>
                    <li key={id}>
                        <p>{author}</p>
                        <p>{content}</p>
                    </li>)}
            </ul>
        </div>
    );
};

export default Review;