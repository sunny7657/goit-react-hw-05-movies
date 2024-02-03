import { getMovieInfo } from 'api/moviesAPI';
import { Cast } from 'components/Cast/Cast';
import { AppLoader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

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
    dataMovie && (
      <>
        {loader && <AppLoader />}
        <MovieDetails data={dataMovie} />
        <div className="">
          <h4>Additional information</h4>
          <ul>
            <Link to="cast" className="additional-item">
              Cast
            </Link>
            <Link to="reviews" className="additional-item">
              Reviews
            </Link>
          </ul>
        </div>
      </>
    )
  );
};
