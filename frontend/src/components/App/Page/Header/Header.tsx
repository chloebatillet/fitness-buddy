import logo from '../../../../assets/FITNESS BUDDYlogo.svg';
import { Icon } from '@iconify/react';

import './style.scss';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLogContext } from '../../../../contexts/LogContext';
import Modal from '../../../Commons/Modal/Modal';
import { useCurrentSessionContext } from '../../../../contexts/CurrentSessionContext';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isNewSessionUrl, setIsNewSessionUrl] = useState(false);

  const { logout } = useLogContext();
  const { endSession } = useCurrentSessionContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.href === 'http://localhost:5173/new-session') {
      setIsNewSessionUrl(true);
    } else {
      setIsNewSessionUrl(false);
    }
  }, [window.location.href]);

  const handleConfirm = () => {
    endSession();
    setModalIsOpen(false);
    navigate(-1);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* LOGO */}
          <div className="logo-container">
            <Link to={isNewSessionUrl ? '#' : '/'}>
              <img className="logo" src={logo} alt="Logo Fitness Buddy" />
            </Link>
          </div>
          {/* BURGER */}
          <div
            className="menu-header"
            onClick={
              isNewSessionUrl
                ? () => setModalIsOpen(true)
                : () => setIsOpen(!isOpen)
            }
          >
            <Icon
              icon={'solar:hamburger-menu-linear'}
              height={'40px'}
              color="#efefef"
            />
          </div>
        </div>

        {/* DROPDOWN MENU */}
        {isOpen && (
          <div className="menu-dropdown">
            <ul>
              <Link to={'/settings'} onClick={() => setIsOpen(false)}>
                <li className="menu-item">
                  <Icon icon={'solar:settings-linear'} className="item-icon" />
                  Settings
                </li>
              </Link>
              <Link to={'/'} onClick={() => setIsOpen(false)}>
                <li className="menu-item logout" onClick={handleLogout}>
                  <Icon icon={'solar:login-2-outline'} className="item-icon" />
                  Log out
                </li>
              </Link>
            </ul>
          </div>
        )}
      </header>

      {/* OVERLAY */}
      <div
        className={`overlay-header ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* CLOSE SESSION MODAL */}
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          setIsOpen={setModalIsOpen}
          handleConfirm={handleConfirm}
          message={'Are you sure you want to finish this session?'}
          defaultBtn={true}
        />
      )}
    </>
  );
}

export default Header;
