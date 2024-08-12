import Container from 'components/Container/Container.styled';
import InfoStyled from './MovieInfo.styled';
import Poster from 'components/Poster/Poster';

const MovieDetails = ({ data }) => {
  const { title, poster_path, vote_average, overview, genres, release_date } =
    data;
  const releaseDate = release_date.slice(0, 4);

  return (
    <Container>
      <Poster poster_path={poster_path} width={250} />
      <InfoStyled>
        <h2>
          {title} ({releaseDate})
        </h2>
        <p>User Score: {Math.round(vote_average * 10)}% </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      </InfoStyled>
    </Container>
  );
};

export default MovieDetails;
