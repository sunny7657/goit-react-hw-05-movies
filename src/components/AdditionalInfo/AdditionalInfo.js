import { List, ListItem } from '@mui/joy';
import { Link } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <>
      <h4>Additional information</h4>
      <List>
        <ListItem>
          <Link to="cast" className="additional-item">
            Cast
          </Link>
        </ListItem>
        <ListItem>
          <Link to="reviews" className="additional-item">
            Reviews
          </Link>
        </ListItem>
      </List>
    </>
  );
};
