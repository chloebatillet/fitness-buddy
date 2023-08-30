import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useUserContext } from './UserContext';
import axiosInstance from '../utils/axios';

const LogContext = createContext();

export function useLogContext() {
  return useContext(LogContext);
}

export function LogProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [message, setMessage] = useState('');
  const [displayMessage, setDisplayMessage] = useState(false);

  const { user, setUser } = useUserContext();

  const signup = async (objData) => {
    return await axios
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

  const login = async (objData) => {

    await axios
      .post('http://localhost:3000/login', objData)
      .then((response) => {
        console.log(response.data);
        //setMessage(response.data.message);

        // stockage du token
        localStorage.setItem('token', response.data.token);
        console.log('1', localStorage.getItem('token'));

        axiosInstance.delete

        setTimeout(() => {
          // vérif si le token dans le storage est celui donné par le back
          if (localStorage.getItem('token') === response.data.token) {
            const user = response.data.user;
            localStorage.setItem('user', JSON.stringify({ user }));
            setUser(user);

            console.log('2', localStorage.getItem('token'));

            setIsLogged(true);
            localStorage.setItem('isLogged', 'true');
          }
        }, 2000);
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
    localStorage.removeItem('token');
    localStorage.removeItem('user');
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
