import { Link, useLocation } from 'react-router-dom';
import { ListItem } from '@mui/joy';
import Container from 'components/Container/Container.styled';
import Poster from 'components/Poster/Poster';
import InfoStyled from 'components/MovieDetails/MovieInfo.styled';

const GridItem = ({ title, poster_path, release_date, vote_average, id }) => {
  const location = useLocation();
  const releaseDate = release_date.slice(0, 4);

  return (
    <ListItem>
      <Link
        to={`/movies/${id}`}
        state={location}
        style={{ color: '#405164', width: '100%' }}
      >
        <Container style={{ height: '225px', alignItems: 'center' }}>
          <Poster poster_path={poster_path} width={150} />
          <InfoStyled>
            <h2>
              {title} ({releaseDate})
            </h2>
            <p>User Score: {Math.round(vote_average * 10)}% </p>
          </InfoStyled>
        </Container>
      </Link>
    </ListItem>
  );
};
export default GridItem;
