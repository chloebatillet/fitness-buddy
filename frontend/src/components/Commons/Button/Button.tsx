import { Icon } from '@iconify/react';

import './style.scss';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  type: 'button' | 'submit';
  value: string | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  icon?: string;
  autofocus?: boolean;
  isNo?: boolean;
  style?: {
    color?: string;
    backgroundColor?: string;
    fontWeight?: 'bold' | 'normal';
  };
}

function Button({
  type,
  value,
  icon,
  autofocus,
  isNo,
  style,
  onClick,
  ...other
}: ButtonProps) {
  return (
    <button
      className={`btn ${isNo ? 'is-no' : ''}`}
      type={type}
      value={value}
      autoFocus={autofocus}
      style={{ ...style }}
      onClick={onClick}
      {...other}
    >
      {icon && <Icon icon={icon} color={style?.color} />}
      {value}
    </button>
  );
}

export default Button;
