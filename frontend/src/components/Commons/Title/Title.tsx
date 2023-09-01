import { Icon } from '@iconify/react';
import './style.scss';
import { Link } from 'react-router-dom';

export interface TitleProps {
  level: '1' | '2' | '3' | '4' | '5' | '6';
  text: string;
  icon?: string;
  color?: string;
  link?: string;
  textLink?: string;
}

function Title({ level, text, icon, color, link, textLink}: TitleProps) {
  const TitleLevel = `h${level}`;
  return (
    <header className="title-container" style={{color: `${color}`}}>
      <div className='title-group'>
        <TitleLevel>
        {icon && <Icon icon={icon} className='title-icon' />}
        {text}
      </TitleLevel>
      </div>
      {link && <div className='title-link'>
        <Link to={link}>{textLink}</Link>
      </div>}
    </header>
  );
}

export default Title;
