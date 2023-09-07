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

  const { sendMessage } = useMessageContext();
  const { user, setUser } = useUserContext();
  const { endSession } = useCurrentSessionContext();

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
            setUser(user);

            setIsLogged(true);
            localStorage.setItem('isLogged', 'true');
          }
        }, 2000);
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

      //console.log('coucou');
      setUser(localStorage.getItem('user'));
    }
  };

  const logout = () => {
    setIsLogged(false);
    endSession();
    localStorage.setItem('isLogged', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const logContextValue = {
    isLogged,
    setIsLogged,
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
