import { Link } from 'react-router-dom';
import { StyledGridItem } from './GridItem.styled';

export const GridItem = ({ title, id }) => {
  return (
    <StyledGridItem>
      <Link to={`/movies/${id}`}>{title}</Link>
    </StyledGridItem>
  );
};
