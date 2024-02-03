import { getMovieInfo } from 'api/moviesAPI';
import { AppLoader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const [loader, setLoader] = useState(false);
  const [dataMovie, setDataMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    const getInfo = async () => {
      try {
        const data = await getMovieInfo(movieId);
        setDataMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    movieId && getInfo();
  }, [movieId]);

  return (
    <>
      {loader && <AppLoader />}
      <MovieDetails data={dataMovie} />
    </>
  );
};
