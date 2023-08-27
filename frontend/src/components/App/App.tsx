import { useState } from 'react';

import Authentication from './Authentication/Authentication';
import Page from './Page/Page';

import './App.scss';

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(true);

  return <div className="app">{isLogged ? <Page /> : <Authentication />}</div>;
}

export default App;
