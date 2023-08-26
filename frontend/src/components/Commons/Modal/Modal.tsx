import { Icon } from '@iconify/react';
import Button from '../Button/Button';
import { useState } from 'react';

import './style.scss';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  acceptMessage?: string;
  refuseMessage?: string;
}

function Modal({
  isOpen,
  setIsOpen,
  message,
  acceptMessage,
  refuseMessage,
}: ModalProps) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className={`overlay ${isOpen ? 'open' : ''}`}
        onClick={closeModal}
      ></div>
      <div className={`modal ${isOpen ? 'open' : ''}`}>
        <div className="btn-close-icon">
          <button onClick={closeModal} style={{ all: 'unset' }}>
            <Icon className="icon" icon="akar-icons:cross"/>
          </button>
        </div>

        <div className="btn-message">
          <h3>{message}</h3>
        </div>

        <div className="btn-group">
          <Button
            type="button"
            value={acceptMessage}
            style={{ backgroundColor: 'black' }}
            onClick={() => console.log('coucou')}
          />
          <Button
            type="button"
            value={refuseMessage}
            style={{ backgroundColor: 'red' }}
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
