import { Icon } from '@iconify/react';
import Title from '../../../../../Commons/Title/Title';
import { useState } from 'react';
import Box from '../../../../../Commons/Box/Box';
import SetInput from '../../NewSession/SetInput/SetInput';

import './style.scss';

interface exercise_set {
  nb_reps: number;
  weight_lifted: number;
}

interface exercise_sets {
  exercise_sets: exercise_set[];
}

interface ExerciseBoxProps {
  name: string;
  exercise_details: exercise_sets[];
}

function ExerciseBox({ name, exercise_details }: ExerciseBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={isOpen ? 'exercise-section' : 'exercise-section closed'}
    >
      <Box
        align="left"
        backgroundColor={isOpen ? '#efefef' : '#222'}
        color={isOpen ? '#222' : '#efefef'}
      >
        <header
          className="exercise-box-header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Title level={'2'} text={name} />
          <Icon
            className="unroll-icon"
            icon="solar:alt-arrow-right-linear"
            rotate={1}
          />
        </header>

        <section className="exercise-box-content">
          <ul className="set-list">
            {exercise_details.map((e) =>
              e.exercise_sets.map((el, index) => {
                return (
                  <li key={index} className="set-list-item">
                    <SetInput set={el} />
                  </li>
                );
              })
            )}
          </ul>
        </section>
      </Box>
    </section>
  );
}

export default ExerciseBox;
