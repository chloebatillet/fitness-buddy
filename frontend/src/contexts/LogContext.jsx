import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const LogContext = createContext();

export function useLogContext() {
  return useContext(LogContext);
}

export function LogProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);

  const signup = (objData) => {
    return axios
      .post('http://localhost:3000/signup', objData)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
        setDisplayMessage(true);
        return true;
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.error);
        setDisplayMessage(true);
        return false;
      });
  };

  const login = (objData) => {
    axios
      .post('http://localhost:3000/login', objData)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
        setIsLogged(true);
        localStorage.setItem('isLogged', 'true');
      })
      .catch((error) => {
        console.error(error);
        setMessage(error.response.data.error);
        setDisplayMessage(true);
      });
  };

  const logout = () => {
    setIsLogged(false);
    localStorage.setItem('isLogged', 'false');
  };

  const logContextValue = {
    isLogged,
    setIsLogged,
    signup,
    login,
    logout,
    message,
    setMessage,
    displayMessage,
    setDisplayMessage,
  };

  return (
    <LogContext.Provider value={logContextValue}>
      {children}
    </LogContext.Provider>
  );
}
