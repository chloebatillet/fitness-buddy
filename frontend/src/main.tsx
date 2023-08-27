import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import store from './store';

import App from './components/App/App';
import Error from './components/Error';

import './styles/index.scss';
import Homepage from './components/App/Page/Outlets/Homepage/Homepage';
import Session from './components/App/Page/Outlets/Session/Session';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route errorElement={<Error />}>
        <Route index element={<Homepage />} />
        <Route path="/session/:id" element={<Session />} />
        <Route path="/new-session" element={<Session />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
