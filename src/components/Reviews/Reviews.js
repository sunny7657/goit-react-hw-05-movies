import { Container } from 'components/Container/Container.styled';
import { nanoid } from 'nanoid';

export const Reviews = ({ data }) => {
  return data.map(({ author, content }) => (
    <Container key={nanoid()}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </Container>
  ));
};
