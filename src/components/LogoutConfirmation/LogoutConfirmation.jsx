import { useAuth } from 'contexts/authContext';
import {
  LogoutBtnWrap,
  LogoutConfirmationStyled,
} from './LogoutConfirmation.styled';

const LogoutConfirmation = ({ closeModal }) => {
  const { userLogout } = useAuth();

  const handleLogout = () => {
    userLogout();
    closeModal();
  };

  return (
    <LogoutConfirmationStyled>
      <h2 className="logout-title">Log out</h2>
      <p className="logout-description">
        Are you sure you want to end your session and log out?
      </p>

      <LogoutBtnWrap>
        <button
          className="logout-confirm-btn logout-btn"
          type="button"
          onClick={handleLogout}
        >
          Log out
        </button>
        <button
          className="logout-confirm-btn cancel-btn"
          type="button"
          onClick={closeModal}
        >
          Cancel
        </button>
      </LogoutBtnWrap>
    </LogoutConfirmationStyled>
  );
};

export default LogoutConfirmation;
