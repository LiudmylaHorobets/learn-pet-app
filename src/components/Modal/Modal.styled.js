import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: auto;
    max-height: 90%;
    padding: 64px;
    background-color: #fff;
    border-radius: 24px;
    transform: translate(-50%, -50%);
  }

  .modal-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: transparent;
    border: none;
    transition: transform 350ms ease-in-out;
    cursor: pointer;

    &:hover {
      transform: rotate(180deg);
    }
  }

  .modal-icon {
    width: 24px;
    height: 24px;
    stroke: #121417;
  }
`;
