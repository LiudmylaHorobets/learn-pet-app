import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  .modal-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
    padding: 40px;
    width: 461px;
    max-height: 80%;
    border-radius: 24px;
    background-color: var(--primary-white);
  }
  .modal-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 1;
    width: 24px;
    height: 24px;

    stroke: #121417;
    cursor: pointer;

    &:hover,
    &:focus {
      transform: rotate(180deg);
    }
  }
`;
