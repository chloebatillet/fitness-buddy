import { createContext, useContext, useState } from 'react';

const LogContext = createContext();

export function useLogContext() {
  return useContext(LogContext);
}

export function LogProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => {
    setIsLogged(true);
    localStorage.setItem('isLogged', 'true');
  };

  const logout = () => {
    setIsLogged(false);
    localStorage.setItem('isLogged', 'false');

  };

  const logContextValue = {
    isLogged,
    login,
    logout,
  };

  return (
    <LogContext.Provider value={logContextValue}>
      {children}
    </LogContext.Provider>
  );
}
