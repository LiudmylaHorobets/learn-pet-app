import { useEffect } from 'react';
import { Overlay } from './Modal.styled';
import Icon from 'Icon/Icon';

const Modal = ({ setVisible, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setVisible]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setVisible(false);
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <div className="modal-wrapper">
        <button onClick={() => setVisible(false)} className="modal-btn">
          <Icon className="modal-icon" id="close" />
        </button>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
