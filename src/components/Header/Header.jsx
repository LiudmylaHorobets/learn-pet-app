import { Link } from 'react-router-dom';

import { HeaderAuth, HeaderNavigation, HeaderStyled } from './Header.styled';
import Icon from 'components/Icon/Icon';

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <HeaderNavigation>
          <a className="nav-logo-link" href="/learn-pet-app">
            <Icon className="nav-logo" id="ukraine" />
            <span>LearnLingo</span>
          </a>

          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/teachers">Teachers</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </HeaderNavigation>

        <HeaderAuth>
          <button className="btn-auth btn-log-in" type="button">
            <Icon className="logo-log-in" id="log-in" />
            Log In
          </button>
          <button className="btn-auth btn-log-out" type="button">
            <Icon className="logo-log-out" id="log-out" />
            Log Out
          </button>
          <button className="btn-auth btn-registration" type="button">
            Registration
          </button>
        </HeaderAuth>
      </HeaderStyled>
    </>
  );
};

export default Header;
