import Button from '../../../../Commons/Button/Button';
import Carrousel from '../../../../Commons/Carrousel/Carrousel';
import List from '../../../../Commons/List/List';
import Section from '../../../../Commons/Section/Section';
import Title from '../../../../Commons/Title/Title';
import Insights from './Insights/Insights';

function Homepage() {
  return (
    <div className="container">
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
          link: '/settings/exercise-list',
          textLink: 'Manage',
        }}
        content={
          <List
            list={{
              name: 'string',
              items: [],
            }}
          />
        }
      />
    </div>
  );
}
export default Homepage;
