import { getReviews } from 'api/moviesAPI';
import Reviews from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getApi = async () => {
      try {
        const { results } = await getReviews(movieId);

        setReviewsData(results);
      } catch (error) {
        setError(error.message);
      }
    };
    movieId && getApi();
  }, [movieId]);

  return (
    <>
      {error && <p>{error}</p>}
      {reviewsData.length ? (
        <Reviews data={reviewsData} />
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
export default ReviewsPage;
