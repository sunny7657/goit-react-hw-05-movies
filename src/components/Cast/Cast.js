import { MovieDetailsContainer } from 'components/MovieDetails/MovieDetailsContainer.styled';
import { InfoStyled } from 'components/MovieDetails/MovieInfo.styled';

export const Cast = ({ data }) => {
  const defaultImg =
    'https://www.freepik.com/free-vector/illustration-businessman_2606517.htm#query=default%20user&position=1&from_view=keyword&track=ais&uuid=cfaadd70-22ba-4573-a8e7-5413f66de93e';

  return data.map(({ profile_path, name, character }) => (
    <MovieDetailsContainer>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : defaultImg
        }
        width={100}
        alt="poster"
      />
      <InfoStyled>
        <p>{name}</p>
        <p>Character: {character}</p>
      </InfoStyled>
    </MovieDetailsContainer>
  ));
};
