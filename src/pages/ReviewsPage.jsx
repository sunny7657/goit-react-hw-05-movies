import { Reviews } from 'components/Reviews/Reviews';
import { getReviews } from 'api/moviesAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppLoader } from 'components/Loader/Loader';

export const ReviewsPage = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    const getApi = async () => {
      try {
        const { results } = await getReviews(movieId);

        setReviewsData(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    movieId && getApi();
  }, [movieId]);
  console.log('reviewsData :>> ', Boolean(reviewsData.length));

  return (
    <>
      {loader && <AppLoader />}
      {error && <p>{error}</p>}
      {reviewsData.length ? (
        <Reviews data={reviewsData} />
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};
