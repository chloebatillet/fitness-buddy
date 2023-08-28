import { useContext, useEffect, useState } from 'react';

import Authentication from './Authentication/Authentication';
import Page from './Page/Page';

import './App.scss';
import { useLogContext } from '../../contexts/LogContext';

function App() {
  //* A mettre sur le log out et expiration du token
  // localStorage.clear()
  const { isLogged, login } = useLogContext();

  //* voir pour en faire une fonction de vérif directement dans le provider
  if (localStorage.getItem('isLogged')?.valueOf() === 'true') {
    login()
  }

  return <div className="app">{isLogged ? <Page /> : <Authentication />}</div>;
}

export default App;
