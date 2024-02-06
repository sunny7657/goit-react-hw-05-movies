import { Link, useLocation } from 'react-router-dom';
import { StyledGridItem } from './GridItem.styled';

export const GridItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <StyledGridItem>
      <Link to={`/movies/${id}`} state={location}>
        {title}
      </Link>
    </StyledGridItem>
  );
};
