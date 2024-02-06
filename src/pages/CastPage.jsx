import { getCast } from 'api/moviesAPI';
import { Cast } from 'components/Cast/Cast';
import { AppLoader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CastPage = () => {
  const [castData, setCastData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    const getApi = async () => {
      try {
        const { cast } = await getCast(movieId);
        setCastData(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    movieId && getApi();
  }, [movieId]);

  return (
    <>
      {loader && <AppLoader />}
      {error && <p>{error}</p>}
      {castData && <Cast data={castData} />}
    </>
  );
};
