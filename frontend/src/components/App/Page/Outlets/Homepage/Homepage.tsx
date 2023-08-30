import Carrousel from '../../../../Commons/Carrousel/Carrousel';
import Section from '../../../../Commons/Section/Section';
import Insights from './Insights/Insights';
import ExerciseList from './ExerciseList/ExerciseList';

function Homepage() {
  console.log('3', localStorage.getItem('token'));

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
        content={<ExerciseList />}
      />
    </div>
  );
}
export default Homepage;
