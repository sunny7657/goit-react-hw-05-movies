import { useEffect, useState } from 'react';
import { Grid } from '../components/Grid/Grid';
import { AppLoader } from '../components/Loader/Loader';
import { ContainerApp, Section } from 'components/App/App.styled';
import { trendMovies } from 'api/moviesAPI';
import { Container } from 'components/Container/Container.styled';

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
        <ContainerApp>
          {loader && <AppLoader />}
          {error && <p>Ooops {error}</p>}
          <h2>Trending today</h2>
          <Container>
            <Grid trendCountries={trendCountries} />
          </Container>
        </ContainerApp>
      </Section>
    </>
  );
};
