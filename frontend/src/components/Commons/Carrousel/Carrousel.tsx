import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { Icon } from '@iconify/react';

import './style.scss';

function Carrousel() {
  // ajouter un map Items
  return (
    <div className="carrousel-container">
      <div className="carrousel-btn">
        <Icon icon="solar:alt-arrow-left-linear" />
      </div>

      <div className="carrousel-content">
        <Link to="/">
          <Button type={'button'} value={'20-08'} onClick={undefined}></Button>
        </Link>
        <Link to="/">
          <Button type={'button'} value={'23-08'} onClick={undefined}></Button>
        </Link>
        <Link to="/">
          <Button type={'button'} value={'25-08'} onClick={undefined}></Button>
        </Link>
      </div>

      <div className="carrousel-btn">
        <Icon icon="solar:alt-arrow-right-linear" />
      </div>
    </div>
  );
}

export default Carrousel;
