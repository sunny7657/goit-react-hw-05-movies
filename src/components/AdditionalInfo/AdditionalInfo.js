import { List, ListItem, ListItemButton } from '@mui/joy';
import { ContainerApp, Section } from 'components/App/App.styled';
import { NavLink, useLocation } from 'react-router-dom';

const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <Section>
      <ContainerApp>
        <h4>Additional information</h4>
        <List>
          <ListItem>
            <NavLink
              to="cast"
              state={{ from: location.state?.from ?? '/' }}
              style={{ color: '#405164' }}
            >
              <ListItemButton style={{ color: '#405164' }}>Cast</ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="reviews"
              state={{ from: location.state?.from ?? '/' }}
              style={{ color: '#405164' }}
            >
              <ListItemButton style={{ color: '#405164' }}>
                Reviews
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </ContainerApp>
    </Section>
  );
};
export default AdditionalInfo;
