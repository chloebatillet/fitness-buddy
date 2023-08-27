import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Title from '../../Commons/Title/Title';

import './style.scss';

function Page() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <div className="page-content">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
