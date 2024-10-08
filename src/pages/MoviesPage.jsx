import { searchMovies } from 'api/moviesAPI';
import { ContainerApp, Section } from 'components/App/App.styled';
import FormSearchMovies from 'components/Form/FormSearchMovies';
import Grid from 'components/Grid/Grid';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [queryData, setQueryData] = useState(null);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    const getFilms = async query => {
      try {
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
      }
    };
    query && getFilms(query);
  }, [searchParams]);

  return (
    <Section>
      <ContainerApp>
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
