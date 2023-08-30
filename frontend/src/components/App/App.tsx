import Authentication from './Authentication/Authentication';
import Page from './Page/Page';

import './App.scss';
import { useLogContext } from '../../contexts/LogContext';
import { useEffect } from 'react';

function App() {
  //* A mettre sur le log out et expiration du token
  // localStorage.clear()
  const { isLogged, login, setIsLogged } = useLogContext();

  useEffect(() => {
    //* voir pour en faire une fonction de vérif directement dans le provider
    if (localStorage.getItem('isLogged')?.valueOf() === 'true') {
      setIsLogged(true);
    }
  }, [setIsLogged]);

  return <div className="app">{isLogged ? <Page /> : <Authentication />}</div>;
}

export default App;
