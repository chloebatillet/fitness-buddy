import { ReactNode } from 'react';

interface BoxProps {
  children: ReactNode;
  backgroundColor?: string;
  color?: string;
  align?: 'left' | 'center' | 'right';
}

function Box({ children, backgroundColor, color, align }: BoxProps) {
  const style = {
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 8px 2px rgba(0, 0, 0, 0.08)',
    backgroundColor: `${backgroundColor}`,
    color: `${color}`,
    display: 'flex',
    flexDirection: 'column',
    textAlign: `${align || 'center'}`,
    transition: 'all 0.3s ease',
  };
  return (
    <div className="box-container" style={{ ...style }}>
      {children}
    </div>
  );
}

export default Box;
