import Authentication from './Authentication/Authentication';
import Page from './Page/Page';
import { Analytics } from '@vercel/analytics/react';

import './App.scss';
import { useLogContext } from '../../contexts/LogContext';
import { useEffect, useState } from 'react';
import { useMessageContext } from '../../contexts/MessageContext';
import Snackbar from '../Commons/Snackbar/Snackbar';
import Loader from '../Loader';

//* A mettre sur le log out et expiration du token
// localStorage.clear()
function App() {
  const { isLogged, setIsLogged, stayLogged } = useLogContext();
  const { message, isLoading, loadingMessage } = useMessageContext();

  useEffect(() => {
    stayLogged();
  }, [setIsLogged]);
  
  return (
    <>
      {isLoading ? (
        <Loader text={loadingMessage} />
      ) : (
        <>
          <div className="app">{isLogged ? <Page /> : <Authentication />}</div>
          <Snackbar message={message} />
        </>
      )}
      <Analytics />
    </>
  );
}

export default App;
