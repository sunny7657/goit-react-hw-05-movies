import { getMovieInfo } from 'api/moviesAPI';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { AppLoader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const [loader, setLoader] = useState(false);
  const [dataMovie, setDataMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    const getInfo = async () => {
      try {
        const data = await getMovieInfo(movieId);
        setDataMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    movieId && getInfo();
  }, [movieId]);

  return (
    dataMovie && (
      <>
        {loader && <AppLoader />}
        {error && <p>Ooops {error}</p>}
        <MovieDetails data={dataMovie} />
        <AdditionalInfo />
        <Outlet />
      </>
    )
  );
};
