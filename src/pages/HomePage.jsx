import { useEffect, useState } from 'react';
import { Grid } from '../components/Grid/Grid';
import { AppLoader } from '../components/Loader/Loader';
import { Container, Section } from 'components/App/App.styled';
import { trendMovies } from 'api/moviesAPI';

export const HomePage = () => {
  const [trendCountries, setTrendCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const getTrend = async () => {
      try {
        const { results } = await trendMovies();
        setTrendCountries([...results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getTrend();
  }, []);

  return (
    <>
      <Section>
        <Container>
          {loader && <AppLoader />}
          {error && <p>Ooops {error}</p>}
          <h2>Trending today</h2>
          <Grid trendCountries={trendCountries} />
        </Container>
      </Section>
    </>
  );
};
