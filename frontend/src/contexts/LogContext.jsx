// import axios from 'axios';
import { createContext, useContext, useState } from 'react';
import { useUserContext } from './UserContext';
import axiosInstance from '../utils/axios';
import { useCurrentSessionContext } from './CurrentSessionContext';
import { useMessageContext } from './MessageContext';

const LogContext = createContext();

export function useLogContext() {
  return useContext(LogContext);
}

export function LogProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const { sendMessage, putLoader, removeLoader } = useMessageContext();
  const { setUser } = useUserContext();
  const { endSession } = useCurrentSessionContext();

  const wakeServerUp = async () => {
    return await axiosInstance
      .get('/')
      .then((_) => {
        return true;
      })
      .catch((error) => {
        console.log(error.response.data.error);
        sendMessage(error.response.data.error);
        return false;
      });
  };

  const signup = async (objData) => {
    return await axiosInstance
      .post('/signup', objData)
      .then((response) => {
        sendMessage(response.data.message);
        return true;
      })
      .catch((error) => {
        console.log(error);
        sendMessage(error.response.data.error);
        return false;
      });
  };

  const login = async (objData) => {
    //? return ?
    putLoader('Logging in');
    await axiosInstance
      .post('/login', objData)
      .then((response) => {
        // stockage du token
        localStorage.setItem('token', response.data.token);

        axiosInstance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;

        setTimeout(() => {
          // vérif si le token dans le storage est celui donné par le back

          if (localStorage.getItem('token') === response.data.token) {
            const user = response.data.user;
            localStorage.setItem('user', JSON.stringify({ user }));

            //* from localStorage sinon pb de format pour JSON.parse()
            setUser(localStorage.getItem('user'));

            setIsLogged(true);
            localStorage.setItem('isLogged', 'true');
          }
          removeLoader();
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        sendMessage(error.response.data.error);
      });
  };

  const stayLogged = async () => {
    if (localStorage.getItem('isLogged')?.valueOf() === 'true') {
      axiosInstance.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`;
      setIsLogged(true);

      setUser(localStorage.getItem('user'));
    }
  };

  const logout = () => {
    putLoader('logging out');

    setTimeout(() => {
      setIsLogged(false);
      endSession();
      localStorage.setItem('isLogged', 'false');
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      removeLoader();
    }, 2000);
  };

  const logContextValue = {
    isLogged,
    setIsLogged,
    wakeServerUp,
    signup,
    login,
    stayLogged,
    logout,
  };

  return (
    <LogContext.Provider value={logContextValue}>
      {children}
    </LogContext.Provider>
  );
}
