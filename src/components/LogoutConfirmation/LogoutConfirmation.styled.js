import styled from 'styled-components';

export const LogoutConfirmationStyled = styled.div`
  width: 438px;

  .logout-title {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }

  .logout-description {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 40px;
    color: rgba(18, 20, 23, 0.8);
  }
`;
export const LogoutBtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  
  .logout-confirm-btn {
    width: 50%;
    height: 60px;

    color: var(--primary-black);
    border-radius: 12px;

    font-size: 18px;
    font-weight: 700;
    line-height: 1.38;

    cursor: pointer;
  }

  .logout-btn {
    background-color: var(--primary-yellow);

    &:hover,
    &:focus {
      background-color: var(--secondary-light-yellow);
    }
  }

  .cancel-btn {
    background-color: #bd402e;

    &:hover,
    &:focus {
      background-color: #e06654;
    }
  }
`;
