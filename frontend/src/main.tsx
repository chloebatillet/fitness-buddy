//import { Provider } from 'react-redux';
//import store from './store';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import App from './components/App/App';
import Error from './components/Error';
import Homepage from './components/App/Page/Outlets/Homepage/Homepage';
import Session from './components/App/Page/Outlets/Session/Session';
import NewSession from './components/App/Page/Outlets/NewSession/NewSession';
import Settings from './components/App/Page/Outlets/Settings/Settings';

import { LogProvider } from './contexts/LogContext';
import { UserProvider } from './contexts/UserContext';
import { CurrentSessionProvider } from './contexts/CurrentSessionContext';
import { MessageProvider } from './contexts/MessageContext';
import { ExerciseProvider } from './contexts/ExerciseContext';

import './styles/index.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route errorElement={<Error />}>
        <Route index element={<Homepage />} />
        <Route path="/session/:id" element={<Session />} />
        <Route path="/new-session" element={<NewSession />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// root.render(
//   <Provider store={store}>
//     <RouterProvider router={router} />
//   </Provider>
// );

root.render(
  <MessageProvider> {/*Pour afficher les messages d'erreur/succès*/}
    <UserProvider> {/*Pour stocker les informations de l'utilisateur */}
      <ExerciseProvider> {/*Pour stocker la liste des exercices, les favoris etc. */}
        <CurrentSessionProvider> {/*Pour enregistrer les données de séance en cours de saisie */}
          <LogProvider> {/*Pour gérer la connexion/déconnexion/maintien de la connexion */}
            <RouterProvider router={router} />
          </LogProvider>
        </CurrentSessionProvider>
      </ExerciseProvider>
    </UserProvider>
  </MessageProvider>
);
