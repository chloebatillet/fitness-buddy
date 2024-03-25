import { useEffect, useState } from 'react';

import logo from '../../../assets/FITNESS BUDDYlogo.svg';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import './style.scss';
import { useLogContext } from '../../../contexts/LogContext';

function Authentication() {
  const [isLogin, setIsLogin] = useState(true);
  const [serverIsOk, setServerIsOk] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const { wakeServerUp } = useLogContext();

  useEffect(() => {
    const updateTimer = () => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, [seconds]);

  const relaunchServer = async () => {
    const test = await wakeServerUp();
    setServerIsOk(test);
  };

  useEffect(() => {
    setTimeout(() => {
      relaunchServer();
    }, 1000);
  }, []);

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
        <p className="server-status">
          <span
            className={serverIsOk ? 'bubble --green' : 'bubble --red'}
          ></span>
          {serverIsOk
            ? 'Server ready'
            : `Wait for server to relaunch: ${seconds}s...`}
        </p>
        <p className="credits">Created & developed by @chloebatillet</p>
      </div>
    </>
  );
}

export default Authentication;
