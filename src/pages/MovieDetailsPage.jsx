import { Button, Divider } from '@mui/joy';
import { getMovieInfo } from 'api/moviesAPI';
import AdditionalInfo from 'components/AdditionalInfo/AdditionalInfo';
import { ContainerApp, Section } from 'components/App/App.styled';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const [dataMovie, setDataMovie] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const location = useLocation();
  const valueRef = useRef(location);

  const navigate = useNavigate();

  useEffect(() => {
    const getApi = async () => {
      try {
        const data = await getMovieInfo(movieId);
        setDataMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };
    movieId && getApi();
  }, [movieId]);

  const handleBack = () => {
    navigate(valueRef.current.state ?? '/');
  };

  return (
    dataMovie && (
      <Section>
        <ContainerApp>
          {error && <p>{error}</p>}
          <Button onClick={handleBack} variant={'soft'} size="sm">
            Go back
          </Button>
          <MovieDetails data={dataMovie} />
          <AdditionalInfo />
          <Divider />
          <Outlet />
        </ContainerApp>
      </Section>
    )
  );
};

export default MovieDetailsPage;
