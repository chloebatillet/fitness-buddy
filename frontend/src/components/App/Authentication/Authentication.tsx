import { useState } from 'react';
import Button from '../../Commons/Button/Button';
import Modal from '../../Commons/Modal/Modal';

function Authentication() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log(isOpen);
  };

  console.log(isOpen);

  return (
    <div
      style={{
        margin: 'auto',
        width: '66.6%',
        height: '100vh',
      }}
    >
      <div>Logo</div>
      <div>Modal</div>
      <Button
        type="button"
        value="hello"
        style={{ fontWeight: 'normal' }}
        icon="akar-icons:cross"
        onClick={openModal}
      />
      
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          message="Coucou comment ça va ?"
          acceptMessage="oui" refuseMessage="annuler"
        />
      )}
    </div>
  );
}

export default Authentication;
