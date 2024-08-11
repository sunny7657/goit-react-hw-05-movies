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
          <h1
            style={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              padding: '0',
              margin: '-1px',
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              border: '0',
            }}
          >
            Movies app
          </h1>
          <h2>Trending today</h2>
          <Grid data={trendCountries} />
        </ContainerApp>
      </Section>
    </>
  );
};
export default HomePage;
