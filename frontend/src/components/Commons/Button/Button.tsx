import { Icon } from '@iconify/react';

import './style.scss';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  type: 'button' | 'submit';
  value: string | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: string;
  autofocus?: boolean;
  style?: {
    color?: string;
    backgroundColor?: string;
    fontWeight?: 'bold' | 'normal';
  };
}

function Button({ type, value, icon, autofocus, style, onClick}: ButtonProps) {
  return (
    <button
      className="btn"
      type={type}
      autoFocus={autofocus}
      style={{ ...style }}
      onClick={onClick}
    >
      {icon && <Icon icon={icon} color={style?.color} />}
      {value}
    </button>
  );
}

export default Button;
