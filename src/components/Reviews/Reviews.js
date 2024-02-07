import InfoStyled from 'components/MovieDetails/MovieInfo.styled';
import { nanoid } from 'nanoid';

const Reviews = ({ data }) => {
  return data.map(({ author, content }) => (
    <InfoStyled key={nanoid()}>
      <h4>Author: {author}</h4>
      <p style={{ width: '350px', padding: '20px', background: '#3bffc514' }}>
        {content}
      </p>
    </InfoStyled>
  ));
};

export default Reviews;
