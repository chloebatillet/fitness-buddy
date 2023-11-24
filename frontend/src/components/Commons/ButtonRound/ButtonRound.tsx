import { Icon } from '@iconify/react';
import { MouseEventHandler } from 'react';

import './style.scss';

interface ButttonRoundProps {
  type: 'button' | 'submit';
  value: string;
  icon?: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  style?: {
    color?: string;
    backgroundColor?: string;
    fontWeight?: 'bold' | 'normal';
    fontSize?: string;
  };
}

function ButtonRound({
  type,
  onClick,
  value,
  style,
  icon,
  ...other
}: ButttonRoundProps) {
  return (
    <button
      className="round-btn"
      type={type}
      value={value}
      onClick={onClick}
      style={{ ...style }}
      {...other}
    >
      <div className="round-btn-container">
        {icon && <Icon icon={icon} color={style?.color} />}
        {value}
      </div>
    </button>
  );
}

export default ButtonRound;
