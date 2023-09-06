import { Icon } from '@iconify/react';

import './style.scss';

interface SnackbarProps {
  message: string;
  color?: string;
}

function Snackbar({ message }: SnackbarProps) {
  return (
    <aside className={message ? 'snackbar is-active' : 'snackbar'}>
      <div className="snackbar-content">
        <Icon className="bell-ringing" icon="ph:bell-ringing" color="#222" />
        <p className="snackbar-message">{message}</p>
      </div>
    </aside>
  );
}

export default Snackbar;
