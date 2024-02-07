import { useEffect, useState } from 'react';
import { trendMovies } from 'api/moviesAPI';
import { ContainerApp, Section } from 'components/App/App.styled';
import AppLoader from 'components/Loader/Loader';
import Grid from 'components/Grid/Grid';

const HomePage = () => {
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
          {error && <p>{error}</p>}
          <h2>Trending today</h2>
          <Grid data={trendCountries} />
        </ContainerApp>
      </Section>
    </>
  );
};
export default HomePage;
