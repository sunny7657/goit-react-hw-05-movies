import { MovieDetailsContainer } from 'components/MovieDetails/MovieDetailsContainer.styled';
import { InfoStyled } from 'components/MovieDetails/MovieInfo.styled';

export const Cast = ({ data }) => {
  const defaultImg = 'https://i.stack.imgur.com/34AD2.jpg';

  return data.map(({ profile_path, name, character, id }) => (
    <MovieDetailsContainer key={id}>
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
