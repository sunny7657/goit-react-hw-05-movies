import { searchMovies } from 'api/moviesAPI';
import { ContainerApp, Section } from 'components/App/App.styled';
import FormSearchMovies from 'components/Form/FormSearchMovies';
import Grid from 'components/Grid/Grid';
import AppLoader from 'components/Loader/Loader';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [queryData, setQueryData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  const [searchParams] = useSearchParams();

  const getFilms = useCallback(async query => {
    try {
      setLoader(true);
      const { results } = await searchMovies(query);
      if (!results.length) {
        setIsEmpty(true);
        setQueryData(null);
        return;
      }
      setIsEmpty(false);
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
    <Section>
      <ContainerApp>
        {loader && <AppLoader />}
        {error && <p>{error}</p>}
        <FormSearchMovies />
        {queryData && <Grid data={queryData} />}
        {isEmpty && (
          <p style={{ paddingBottom: '15px', paddingTop: '15px' }}>
            No matches found...
          </p>
        )}
      </ContainerApp>
    </Section>
  );
};

export default MoviesPage;
