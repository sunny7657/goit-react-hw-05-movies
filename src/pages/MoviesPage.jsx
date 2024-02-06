import { searchMovies } from 'api/moviesAPI';
import { FormSearchMovies } from 'components/Form/FormSearchMovies';
import { Grid } from 'components/Grid/Grid';
import { AppLoader } from 'components/Loader/Loader';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [queryData, setQueryData] = useState(null);

  const [searchParams] = useSearchParams();

  const getFilms = useCallback(async query => {
    try {
      setLoader(true);
      const { results } = await searchMovies(query);

      setQueryData(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    const query = searchParams.get('query');
    query && getFilms(query);
  }, [getFilms, searchParams]);

  return (
    <>
      {loader && <AppLoader />}
      {error && <p>{error}</p>}
      <FormSearchMovies />
      {queryData && <Grid data={queryData} />}
    </>
  );
};
