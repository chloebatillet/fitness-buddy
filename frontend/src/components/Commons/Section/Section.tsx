import { ReactElement } from 'react';
import Title, { TitleProps } from '../Title/Title';

import './style.scss';

interface SectionProps {
  titleDetails: TitleProps;
  id?: string;
  content?: ReactElement;
  borderBottom?: 'none';
}

function Section({ titleDetails, id, content, borderBottom }: SectionProps) {
  return (
    <section
      id={id}
      className="section-container"
      style={
        borderBottom && {
          borderBottom: `${borderBottom}`,
          paddingBottom: '0px',
        }
      }
    >
      <Title
        level={titleDetails.level}
        text={titleDetails.text}
        icon={titleDetails.icon}
        color={titleDetails.color}
        fontWeight={titleDetails.fontWeight}
        link={titleDetails.link}
        textLink={titleDetails.textLink}
      />
      {content}
    </section>
  );
}

export default Section;
