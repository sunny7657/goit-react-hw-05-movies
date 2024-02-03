import { MovieDetailsContainer } from 'components/MovieDetails/MovieDetailsContainer.styled';
import { InfoStyled } from 'components/MovieDetails/MovieInfo.styled';

export const Cast = ({ data }) => {
  const defaultImg = 'https://i.stack.imgur.com/l60Hf.png';

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
