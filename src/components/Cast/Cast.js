import Container from 'components/Container/Container.styled';
import InfoStyled from 'components/MovieDetails/MovieInfo.styled';
import { nanoid } from 'nanoid';

const Cast = ({ data }) => {
  const defaultImg = 'https://i.stack.imgur.com/34AD2.jpg';

  return data.map(({ profile_path, name, character }) => (
    <Container key={nanoid()}>
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
        <p>Character: {character ? character : '-'}</p>
      </InfoStyled>
    </Container>
  ));
};
export default Cast;
