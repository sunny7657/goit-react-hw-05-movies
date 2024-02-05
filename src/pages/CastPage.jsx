import { getCast } from 'api/moviesAPI';
import { Cast } from 'components/Cast/Cast';
import { AppLoader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CastPage = () => {
  const [castData, setCastData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    const getCastData = async () => {
      try {
        const { cast } = await getCast(movieId);
        console.log(cast);
        setCastData(cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    movieId && getCastData();
  }, [movieId]);

  return (
    <>
      {loader && <AppLoader />}
      {error && <p>Ooops {error}</p>}
      {castData && <Cast data={castData} />}
    </>
  );
};
