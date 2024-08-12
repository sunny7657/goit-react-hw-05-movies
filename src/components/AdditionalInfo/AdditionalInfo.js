import { List, ListItem, ListItemButton } from '@mui/joy';
import { ContainerApp, Section } from 'components/App/App.styled';
import { NavLink, useLocation } from 'react-router-dom';

const AdditionalInfo = () => {
  const location = useLocation();

  return (
    <Section>
      <ContainerApp>
        <h3>Additional information</h3>
        <List>
          <ListItem>
            <NavLink
              to="cast"
              state={{ from: location.state?.from ?? '/' }}
              style={{ color: '#405164' }}
            >
              <ListItemButton style={{ color: '#405164' }}>
                <h4 style={{ margin: '0' }}>Cast</h4>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              to="reviews"
              state={{ from: location.state?.from ?? '/' }}
              style={{ color: '#405164' }}
            >
              <ListItemButton style={{ color: '#405164' }}>
                <h4 style={{ margin: '0' }}>Reviews</h4>
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </ContainerApp>
    </Section>
  );
};
export default AdditionalInfo;
