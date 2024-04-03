import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 438px;

  .form-title {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 20px;
    letter-spacing: -0.02em;
  }

  .form-description {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 40px;
    color: rgba(18, 20, 23, 0.8);
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .input-wrap {
    display: flex;
    flex-direction: column;
    gap: 18px;

    input {
      width: 100%;
      height: 54px;
      padding: 16px 18px;
      font-size: 16px;
      line-height: 1.375;
      border: 1px solid rgba(18, 20, 23, 0.1);
      border-radius: 12px;
      color: var(--primary-black);

      &::placeholder {
        font-size: 16px;
        font-weight: 400;
        color: var(--primary-black);
      }
    }

    .label-toggle-password {
      position: relative;
    }
  }

  .error-message {
    color: red;
  }
`;

export const FormBtn = styled.button`
  width: 100%;
  height: 60px;

  color: var(--primary-black);
  background-color: var(--primary-yellow);
  border-radius: 12px;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.38;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--secondary-light-yellow);
  }
`;

export const IconTogglePassword = styled.span`
  top: 28px;
  right: 12px;
  transform: translate(-50%, -50%);
  position: absolute;
  z-index: 1;

  .icon-eye,
  .icon-eye-off {
    width: 20px;
    height: 20px;
  }
`;
