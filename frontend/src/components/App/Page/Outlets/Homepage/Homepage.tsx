import Button from '../../../../Commons/Button/Button';
import Carrousel from '../../../../Commons/Carrousel/Carrousel';
import Section from '../../../../Commons/Section/Section';
import Title from '../../../../Commons/Title/Title';
import Insights from './Insights/Insights';

function Homepage() {
  return (
    <div className='container'>
      <Section
        titleDetails={{
          level: '2',
          text: 'my last sessions',
          icon: 'ph:barbell',
        }}
        content={<Carrousel />}
      />
      <Section
        titleDetails={{
          level: '2',
          text: 'my progress',
          icon: 'mdi:graph-line',
          link: '/my-progress',
          textLink: 'See more',
        }}
        content={<Insights />}
      />
      <Section
        titleDetails={{
          level: '2',
          text: 'exercice list',
          icon: 'solar:list-bold',
        }}
        content={<Button />}
      />
    </div>
  );
}
export default Homepage;
