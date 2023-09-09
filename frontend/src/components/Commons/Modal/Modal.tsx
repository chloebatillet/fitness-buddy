import { Icon } from '@iconify/react';
import Button from '../Button/Button';

import './style.scss';
import { ReactElement } from 'react';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleConfirm: () => void;
  message: string | ReactElement;
  defaultBtn: boolean;
  acceptMessage?: string;
  refuseMessage?: string;
}

function Modal({
  isOpen,
  setIsOpen,
  handleConfirm,
  message,
  defaultBtn,
  acceptMessage,
  refuseMessage,
}: ModalProps) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-container">
      <div
        className={`overlay ${isOpen ? 'open' : ''}`}
        onClick={closeModal}
      ></div>
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="modal-content">
          <div className="btn-close-icon">
            <button onClick={closeModal} style={{ all: 'unset' }}>
              <Icon className="icon" icon="akar-icons:cross" />
            </button>
          </div>

          <div className="btn-message">
            <h3>{message}</h3>
          </div>

          <div className="btn-group">
            {defaultBtn && (
              <Button
                type="button"
                value={acceptMessage || 'YES'}
                style={{ backgroundColor: '#222' }}
                onClick={() => handleConfirm()}
              />
            )}
            {defaultBtn && (
              <Button
                type="button"
                value={refuseMessage || 'NO'}
                isNo={true}
                onClick={closeModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
