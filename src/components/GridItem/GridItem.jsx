import { NavLink, useParams } from 'react-router-dom';

export const GridItem = ({ title, id }) => {
  const params = useParams();
  return <NavLink to="/movies/:id">{title}</NavLink>;
};
