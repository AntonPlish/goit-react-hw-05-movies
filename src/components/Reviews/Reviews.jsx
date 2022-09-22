import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../Api/Api"

const Review = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState(null);
    
    useEffect(() => {
        async function fetchReviews() {
            const resReviews = await getReviews(movieId);
            setReview(resReviews);
        }

        fetchReviews();
    }, [movieId]);

    if (!review) {
        return null;
    }

    return (
        <>
            <div>
                <ul>
                    {review.data.results.length > 0 ? (review.data.results.map(({ id, author, content }) =>
                        <li key={id}>
                            <p>{author}</p>
                            <p>{content}</p>
                        </li>)) : (
                        <p>We do not have any reviews for this movie.</p>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Review;