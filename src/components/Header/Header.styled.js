import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 0 auto;

  /* перенести в глобальні стилі */
  min-width: 320px;
  max-width: 1312px;

  border: 1px solid red;

  @media screen and (min-width: 768px) {
    padding: 20px 64px;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 660px;

  .nav-logo-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    color: #121417;
    font-size: 20px;
    font-weight: 500;
  }
  .nav-logo {
    width: 28px;
    height: 28px;
  }

  .nav-list {
    display: none;
  }
  @media screen and (min-width: 768px) {
    .nav-list {
      display: flex;
      align-items: center;
      gap: 28px;
      cursor: pointer;
    }
  }
`;

export const HeaderAuth = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 6px;
  }
  .logo-log-out,
  .logo-log-in {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  .btn-auth {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    font-weight: 700;

    border-radius: 12px;
    cursor: pointer;
  }

  .btn-log-out,
  .btn-log-in {
    padding: 14px 10px;
    color: #121417;
    background-color: white;

    &:hover,
    &:active {
      color: #e0a39a;
      background-color: #121417;
    }
  }

  .btn-registration {
    padding: 14px 40px;
    color: white;
    background-color: #121417;
    &:hover,
    &:active {
      background-color: #e0a39a;
    }
  }
`;
