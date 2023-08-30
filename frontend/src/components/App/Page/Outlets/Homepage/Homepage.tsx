import Section from '../../../../Commons/Section/Section';
import Insights from './Insights/Insights';
import ExerciseList from './ExerciseList/ExerciseList';
import LastSessions from './LastSession/LastSessions';

function Homepage() {
  return (
    <div className="container">
      <Section
        titleDetails={{
          level: '2',
          text: 'my last sessions',
          icon: 'ph:barbell',
        }}
        content={<LastSessions />}
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
        content={<ExerciseList />}
      />
    </div>
  );
}
export default Homepage;
