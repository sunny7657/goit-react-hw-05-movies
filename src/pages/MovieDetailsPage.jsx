import { getMovieInfo } from 'api/moviesAPI';
import { AppLoader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const [loader, setLoader] = useState(false);
  const [dataFilm, setDataFilm] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);
    const getInfo = async () => {
      try {
        const data = await getMovieInfo(movieId);
        console.log(data);
        setDataFilm(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    getInfo();
  }, [movieId]);

  return (
    <>
      {loader && <AppLoader />}
      <MovieDetails data={dataFilm} />
    </>
  );
};
