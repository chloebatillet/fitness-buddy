import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import Modal from '../../../Commons/Modal/Modal';

function Footer() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    setIsLaunched(!isLaunched);
    console.log('redirection');
    navigate('/new-session');
  };

  const handleStop = () => {
    setIsOpen(true);
  };

  const handleConfirm = () => {
    setIsLaunched(false);
    setIsOpen(false);
    console.log('redirection');
    navigate(-1);
  };

  const handleClick = () => {
    !isLaunched ? handleStart() : handleStop();
  };

  return (
    <>
      <div className="footer">
        <div className="container">
          <button className="footer-btn" onClick={handleClick}>
            {isLaunched ? 'FINISH' : 'START'}
          </button>
        </div>
      </div>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleConfirm={handleConfirm}
          message={'Are you sure you want to finish this session?'}
        />
      )}
      {/* {isLaunched && <Redirect to="/nouvelle-page" />} */}
    </>
  );
}

export default Footer;
