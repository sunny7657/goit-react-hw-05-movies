import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListDivider,
  Divider,
} from '@mui/joy';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, Videocam } from '@mui/icons-material';

const Header = () => {
  return (
    <>
      <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
        <List role="menubar" orientation="horizontal">
          <ListItem role="none">
            <NavLink to="/">
              <ListItemButton style={{ color: '#405164' }}>
                <Home />
                Home
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListDivider />
          <ListItem role="none">
            <ListItemButton style={{ color: '#405164' }}>
              <Videocam />
              <NavLink to="/movies">Movies</NavLink>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
      <Outlet />
    </>
  );
};

export default Header;

/* <ListItemButton role="menuitem" component="a" aria-label="Home"></ListItemButton> */
