import { List, ListItem } from '@mui/joy';
import { ContainerApp, Section } from 'components/App/App.styled';
import { Link, useLocation } from 'react-router-dom';

const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <Section>
      <ContainerApp>
        <h4>Additional information</h4>
        <List>
          <ListItem>
            <Link
              to="cast"
              state={{ from: location.state?.from ?? '/' }}
              style={{ color: '#405164' }}
            >
              Cast
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="reviews"
              state={{ from: location.state?.from ?? '/' }}
              style={{ color: '#405164' }}
            >
              Reviews
            </Link>
          </ListItem>
        </List>
      </ContainerApp>
    </Section>
  );
};
export default AdditionalInfo;
