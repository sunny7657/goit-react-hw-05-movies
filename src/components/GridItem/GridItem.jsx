import { NavLink } from 'react-router-dom';
import { StyledGridItem } from './GridItem.styled';

export const GridItem = ({ title, id }) => {
  return (
    <StyledGridItem>
      <NavLink to="/movies/:id">{title}</NavLink>
    </StyledGridItem>
  );
};
