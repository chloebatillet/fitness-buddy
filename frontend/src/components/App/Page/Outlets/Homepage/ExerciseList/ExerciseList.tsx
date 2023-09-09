import { useExerciseContext } from '../../../../../../contexts/ExerciseContext';
import { useUserContext } from '../../../../../../contexts/UserContext';
import List from '../../../../../Commons/List/List';

import { useEffect } from 'react';

// interface ExerciseListProps {
//   mode: 'normal' | 'delete' | 'update';
// }

function ExerciseList() {
  const { exerciseList, getExerciseList } = useExerciseContext();

  useEffect(() => {
    getExerciseList();
  }, []);

  const list = exerciseList.map((e: any) => {
    return <List key={e.name} name={e.name} items={e.exercises} />;
  });

  return <ul>{list}</ul>;
}

export default ExerciseList;
