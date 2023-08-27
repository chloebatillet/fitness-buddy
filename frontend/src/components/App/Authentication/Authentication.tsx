import { useState } from 'react';

import logo from '../../../assets/FITNESS BUDDYlogo.svg';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import './style.scss';


function Authentication() {
  const [isLogin, setIsLogin] = useState(false);

  return (
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
      <p className='credits'>Created & developed by @chloebatillet</p>
    </div>
  );
}

export default Authentication;
