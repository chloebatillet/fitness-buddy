import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './style.scss';
import Modal from '../../../Commons/Modal/Modal';
import { useCurrentSessionContext } from '../../../../contexts/CurrentSessionContext';

function Footer() {
  const { createSession, endSession } = useCurrentSessionContext();
  const sessionIsStarted =
    localStorage.getItem('sessionIsStarted')?.valueOf() === 'true';
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    createSession();
    navigate('/new-session');
  };

  const handleStop = () => {
    setIsOpen(true);
  };

  const handleConfirm = () => {
    endSession();
    setIsOpen(false);
    navigate(-1);
  };

  const handleClick = () => {
    sessionIsStarted ? handleStop() : handleStart();
  };

  return (
    <>
      <div className="footer">
        <div className="container">
          <button className="footer-btn" onClick={handleClick}>
            {sessionIsStarted ? 'FINISH' : 'START'}
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
      {/* {IsStarted && <Redirect to="/nouvelle-page" />} */}
    </>
  );
}

export default Footer;
