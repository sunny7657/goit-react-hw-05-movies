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
      <Box
        component="nav"
        aria-label="My site"
        sx={{ flexGrow: 1 }}
        style={{
          position: 'fixed',
          zIndex: '100',
          top: '0',
          left: '0',
          width: '100%',
          background: '#e3effb',
        }}
      >
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
            <NavLink to="/movies">
              <ListItemButton style={{ color: '#405164' }}>
                <Videocam />
                Movies
              </ListItemButton>
            </NavLink>
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
