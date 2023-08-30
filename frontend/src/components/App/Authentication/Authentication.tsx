import { useState } from 'react';

import logo from '../../../assets/FITNESS BUDDYlogo.svg';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import './style.scss';
import Snackbar from '../../Commons/Snackbar/Snackbar';
import { useLogContext } from '../../../contexts/LogContext';

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);
  const { message } = useLogContext();

  return (
    <>
      <div className="container authentication">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Logo Fitness Buddy" />
        </div>

        <div className="form-container">
          {isLogin ? (
            <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />
          ) : (
            <SignupForm isLogin={isLogin} setIsLogin={setIsLogin} />
          )}
        </div>
        <p className="credits">Created & developed by @chloebatillet</p>
      </div>

      <Snackbar
        message={message}
      />
    </>
  );
}

export default Authentication;
