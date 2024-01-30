import { NavLink, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className="Header">
        <nav className="HeaderNav">
          <ul className="menu-list">
            <li className="menu-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
