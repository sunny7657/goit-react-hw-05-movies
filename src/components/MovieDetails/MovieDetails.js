import { MovieDetailsContainer } from './MovieDetailsContainer.styled';
import { InfoStyled } from './MovieInfo.styled';

export const MovieDetails = ({ data }) => {
  const { title, poster_path, vote_average, overview, genres, release_date } =
    data;
  const releaseDate = release_date.slice(0, 4);

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <MovieDetailsContainer>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
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
    </MovieDetailsContainer>
  );
};
