import { useEffect, useState } from 'react';
import * as api from 'api/moviesAPI';
import { Grid } from '../Grid/Grid';
import { AppLoader } from '../Loader/Loader';

export const App = () => {
  const [trendCountries, setTrendCountries] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const getTrend = async () => {
      try {
        const { results } = await api.trendMovies();
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
    <div>
      {loader && <AppLoader />}
      <header></header>
      <Grid trendCountries={trendCountries} />
    </div>
  );
};
