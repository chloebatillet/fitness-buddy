import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

import './style.scss';
import { ReactNode } from 'react';
import React from 'react';

export interface TitleProps {
  level: '1' | '2' | '3' | '4' | '5' | '6';
  text: string;
  icon?: string;
  color?: string;
  fontWeight?: 'bold' | 'normal';
  link?: string;
  textLink?: string;
  children?: ReactNode;
}

function Title({
  level,
  text,
  icon,
  color,
  fontWeight,
  link,
  textLink,
  children,
}: TitleProps) {
  const TitleLevel = `h${level}`;
  const titleProps = {
    style: { fontWeight: `${fontWeight}` },
  };

  return (
    <header className="title-container" style={{ color: `${color}` }}>
      <div className="title-group">
        {React.createElement(
          TitleLevel,
          titleProps,
          icon && <Icon icon={icon} className="title-icon" />,
          text
        )}
      </div>
      {link && (
        <div className="title-link">
          <Link to={link}>{textLink}</Link>
        </div>
      )}
      {children}
    </header>
  );
}

export default Title;
