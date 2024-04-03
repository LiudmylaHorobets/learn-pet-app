import { useState } from 'react';
import { Link } from 'react-router-dom';

import { HeaderAuth, HeaderNavigation, HeaderStyled } from './Header.styled';
import Icon from 'components/Icon/Icon';
import Modal from 'components/Modal/Modal';
import RegistrationForm from 'components/AuthForm/RegistrationForm';
import LogoutConfirmation from 'components/LogoutConfirmation/LogoutConfirmation';
import LoginForm from 'components/AuthForm/LoginForm';
import { useAuth } from 'contexts/authContext';

const Header = () => {
  const { currentUser } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = content => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HeaderStyled>
        <HeaderNavigation>
          <Link to="/" className="nav-logo-link">
            <Icon className="nav-logo" id="ukraine" />
            <span>LearnLingo</span>
          </Link>

          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/teachers">Teachers</Link>
            </li>
            {currentUser && (
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            )}
          </ul>
        </HeaderNavigation>
        <HeaderAuth>
          {!currentUser && (
            <>
              <button
                className="btn-auth btn-log-in"
                type="button"
                onClick={() => openModal('login')}
              >
                <Icon className="logo-log-in" id="log-in" />
                Log In
              </button>
              <button
                className="btn-auth btn-registration"
                type="button"
                onClick={() => openModal('registration')}
              >
                Registration
              </button>
            </>
          )}
          {currentUser && (
            <button
              className="btn-auth btn-log-out"
              type="button"
              onClick={() => openModal('logout')}
            >
              <Icon className="logo-log-out" id="log-out" />
              Log Out
            </button>
          )}
        </HeaderAuth>
      </HeaderStyled>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          {modalContent === 'login' && <LoginForm closeModal={closeModal} />}
          {modalContent === 'logout' && (
            <LogoutConfirmation closeModal={closeModal} />
          )}
          {modalContent === 'registration' && (
            <RegistrationForm closeModal={closeModal} />
          )}
        </Modal>
      )}
    </>
  );
};

export default Header;
