import { useState } from 'react';

import './style.scss';
import AddExercise from './AddExercise/AddExercise';
import Button from '../../../../Commons/Button/Button';
import Timer from './Timer/Timer';
import ExerciseBox from '../Session/ExerciseBox/ExerciseBox';
import { useCurrentSessionContext } from '../../../../../contexts/CurrentSessionContext';

function NewSession() {
  const { allExercises } = useCurrentSessionContext();

  const [isOpen, setIsOpen] = useState(true);

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '1rem',
      }}
    >
      {allExercises.map((e: any, index: number) => {
        return (
          <ExerciseBox
            key={index}
            name={e.name}
            exercise_details={e.exercise_details}
          />
        );
      })}

      {isOpen && <AddExercise setIsOpen={setIsOpen} />}

      <Button
        type={'button'}
        value={'+ add one'}
        onClick={() => setIsOpen(true)}
        style={{ backgroundColor: '#efefef', color: '#222' }}
      />
      <Timer />

      {/* {allExercises.map((e, index) => {
        if (index < allExercises.length - 1) {
          return React.cloneElement(e, { isClosed: true, key: index });
        } else {
          return e;
        }
      })}  */}
    </main>
  );
}

export default NewSession;
