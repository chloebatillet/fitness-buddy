import Title, { TitleProps } from '../Title/Title';

import './style.scss';

interface SectionProps {
  titleDetails: TitleProps;
  content: JSX.IntrinsicElements;
}

function Section({ titleDetails, content }: SectionProps) {
  return (
    <section className='section-container'>
      <Title
        level={titleDetails.level}
        text={titleDetails.text}
        icon={titleDetails.icon}
        color={titleDetails.color}
        link={titleDetails.link}
        textLink={titleDetails.textLink}
      />
      {content}
    </section>
  );
}

export default Section;
