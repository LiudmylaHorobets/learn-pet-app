import { LogoutBtnWrap, LogoutConfirmationStyled } from './LogoutConfirmation.styled';

const LogoutConfirmation = () => {
  return (
    <LogoutConfirmationStyled>
      <h2 className="logout-title">Log out</h2>
      <p className="logout-description">
        Are you sure you want to end your session and log out?
      </p>

      <LogoutBtnWrap>
        <button className="logout-confirm-btn logout-btn" type="button">
          Log out
        </button>
        <button className="logout-confirm-btn cancel-btn" type="button">
          Cancel
        </button>
      </LogoutBtnWrap>
    </LogoutConfirmationStyled>
  );
};

export default LogoutConfirmation;
