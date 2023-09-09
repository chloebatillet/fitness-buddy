import { Icon } from '@iconify/react';

import './style.scss';

interface ButtonLightProps {
  text: string;
  icon?: string;
  handleClickFunction?: () => void;
}

function ButtonLight({ text, icon, handleClickFunction }: ButtonLightProps) {
  return (
    <button className="button-light" onClick={handleClickFunction}>
      {icon && <Icon icon={icon} className="button-icon" />}
      <div>{text}</div>
    </button>
  );
}

export default ButtonLight;
