import { getMovieInfo } from 'api/moviesAPI';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { BtnStyled } from 'components/Button/Button.styled';
import { AppLoader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    const getApi = async () => {
      try {
        const data = await getMovieInfo(movieId);
        setDataMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    movieId && getApi();
  }, [movieId]);

  const handleBack = () => {
    navigate(location.state ?? '/');
  };

  return (
    dataMovie && (
      <>
        {loader && <AppLoader />}
        {error && <p>{error}</p>}
        <BtnStyled onClick={handleBack}>Go back</BtnStyled>
        {/* <Link to={location.state ?? '/'}>Go back</Link> */}
        <MovieDetails data={dataMovie} />
        <AdditionalInfo />
        <Outlet />
      </>
    )
  );
};
