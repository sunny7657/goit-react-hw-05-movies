import { Link, useLocation } from 'react-router-dom';
import { ListItem } from '@mui/joy';

export const GridItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <ListItem>
      <Link to={`/movies/${id}`} state={location}>
        {title}
      </Link>
    </ListItem>
  );
};
