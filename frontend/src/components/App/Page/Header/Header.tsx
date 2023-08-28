import logo from '../../../../assets/FITNESS BUDDYlogo.svg';
import { Icon } from '@iconify/react';

import './style.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <Link to={'/'}>
              <img className="logo" src={logo} alt="Logo Fitness Buddy" />
            </Link>
          </div>
          <div className="menu-header" onClick={() => setIsOpen(!isOpen)}>
            <Icon
              icon={'solar:hamburger-menu-linear'}
              height={'40px'}
              color="#efefef"
            />
          </div>
        </div>
        {isOpen && (
          <div className="menu-dropdown">
            <ul>
              <Link to={'#'}>
                <li className="menu-item">
                  <Icon icon={'solar:settings-linear'} className="item-icon" />
                  Settings
                </li>
              </Link>
              <Link to={'#'}>
                <li className="menu-item logout">
                  <Icon icon={'solar:login-2-outline'} className="item-icon" />
                  Log out
                </li>
              </Link>
            </ul>
          </div>
        )}
      </header>
      <div
        className={`overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
}

export default Header;