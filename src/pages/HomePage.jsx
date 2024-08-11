import { useEffect, useState } from 'react';
import { trendMovies } from 'api/moviesAPI';
import { ContainerApp, Section } from 'components/App/App.styled';
import Grid from 'components/Grid/Grid';

const HomePage = () => {
  const [trendCountries, setTrendCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrend = async () => {
      try {
        const { results } = await trendMovies();
        setTrendCountries([...results]);
      } catch (error) {
        setError(error.message);
      }
    };
    getTrend();
  }, []);

  return (
    <>
      <Section>
        <ContainerApp>
          {error && <p>{error}</p>}
          <h2>Trending today</h2>
          <Grid data={trendCountries} />
        </ContainerApp>
      </Section>
    </>
  );
};
export default HomePage;
