import { useState } from 'react';
import Authentication from './Authentication/Authentication';
import Page from './Page/Page';

function App() {
  const { isLogged, setIsLogged } = useState<boolean>(false);

  return <div className="app">{isLogged ? <Page /> : <Authentication />}</div>;
}

export default App;
