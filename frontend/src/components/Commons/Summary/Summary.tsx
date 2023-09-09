import { ReactElement, useState } from 'react';
import ButtonLight from '../ButtonLight/ButtonLight';

interface SummaryProps {
  title: string;
  icon?: string;
  content: ReactElement;
}

function Summary({ title, icon, content }: SummaryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const style = {
    content: {
      marginTop: '1.5rem',
      marginBottom: '2rem',
    },
  };

  return (
    <>
      <ButtonLight
        text={title}
        icon={icon}
        handleClickFunction={() => setIsOpen(!isOpen)}
      />
      <div
        className={isOpen ? 'summary-content open' : 'summary-content'}
        style={
          isOpen ? { ...style.content, display: 'block' } : { display: 'none' }
        }
      >
        {content}
      </div>
    </>
  );
}

export default Summary;
