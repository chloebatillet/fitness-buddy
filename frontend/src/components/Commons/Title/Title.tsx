import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import './style.scss';

export interface TitleProps {
  level: '1' | '2' | '3' | '4' | '5' | '6';
  text: string;
  icon?: string;
  color?: string;
  fontWeight?: 'bold' | 'normal';
  link?: string;
  textLink?: string;
}

function Title({
  level,
  text,
  icon,
  color,
  fontWeight,
  link,
  textLink,
}: TitleProps) {
  const TitleLevel = `h${level}`;
  return (
    <header className="title-container" style={{ color: `${color}` }}>
      <div className="title-group">
        <TitleLevel style={{ fontWeight: `${fontWeight}` }}>
          {icon && <Icon icon={icon} className="title-icon" />}
          {text}
        </TitleLevel>
      </div>
      {link && (
        <div className="title-link">
          <Link to={link}>{textLink}</Link>
        </div>
      )}
    </header>
  );
}

export default Title;
