import { getCast } from 'api/moviesAPI';
import Cast from 'components/Cast/Cast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastPage = () => {
  const [castData, setCastData] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getApi = async () => {
      try {
        const { cast } = await getCast(movieId);
        setCastData(cast);
      } catch (error) {
        setError(error.message);
      }
    };
    movieId && getApi();
  }, [movieId]);

  return (
    <>
      {error && <p>{error}</p>}
      {castData && <Cast data={castData} />}
    </>
  );
};

export default CastPage;
