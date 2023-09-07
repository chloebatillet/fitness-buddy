import Authentication from './Authentication/Authentication';
import Page from './Page/Page';

import './App.scss';
import { useLogContext } from '../../contexts/LogContext';
import { useEffect } from 'react';
import { useMessageContext } from '../../contexts/MessageContext';
import Snackbar from '../Commons/Snackbar/Snackbar';
import { useUserContext } from '../../contexts/UserContext';

function App() {
  //* A mettre sur le log out et expiration du token
  // localStorage.clear()
  const { isLogged, setIsLogged, stayLogged } = useLogContext();
  const { user } = useUserContext();

  const { message } = useMessageContext();

  useEffect(() => {
    stayLogged();
    console.log(user);
  }, [setIsLogged, user]);

  return (
    <>
      <div className="app">{isLogged ? <Page /> : <Authentication />}</div>
      <Snackbar message={message} />
    </>
  );
}

export default App;
