import { useEffect } from 'react';
import { Overlay } from './Modal.styled';
import Icon from 'components/Icon/Icon';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <div className="modal-wrapper">
        <button onClick={onClose} className="modal-btn">
          <Icon className="modal-icon" id="close" />
        </button>
        {children}
      </div>
    </Overlay>
  );
};

export default Modal;
