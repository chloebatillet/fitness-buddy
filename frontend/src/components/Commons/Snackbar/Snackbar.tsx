import { Icon } from '@iconify/react';
import './style.scss';
import { useState } from 'react';
import { useLogContext } from '../../../contexts/LogContext';

interface SnackbarProps {
  message: string;
  color?: string;
  display?: boolean;
}

function Snackbar({ message, display }: SnackbarProps) {
  const { displayMessage, setDisplayMessage } = useLogContext();
  const [isActive, setIsActive] = useState(displayMessage);
  const { setMessage } = useLogContext();

  if (displayMessage) {
    setTimeout(() => {
      setDisplayMessage(false);
      setMessage('');      
    }, 5000);
  }

  return (
    <aside className={displayMessage ? 'snackbar is-active' : 'snackbar'}>
      <div className="snackbar-content">
        <Icon className="bell-ringing" icon="ph:bell-ringing" color="#222" />
        <p className="snackbar-message">{message}</p>
      </div>
    </aside>
  );
}

export default Snackbar;
