import { Link, useLocation } from 'react-router-dom';
import { ListItem } from '@mui/joy';

const GridItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <ListItem>
      <Link to={`/movies/${id}`} state={location} style={{ color: '#405164' }}>
        {title}
      </Link>
    </ListItem>
  );
};
export default GridItem;
