import axiosInstance from '../../../../../../utils/axios';
import List from '../../../../../Commons/List/List';



import { useEffect, useState } from 'react';

function ExerciseList() {
  const [exerciseList, setExerciseList] = useState([]);

  const fetchExerciseList = async () => {

    await axiosInstance
      .get('/exercise-list')
      .then(function (response) {
        setExerciseList(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchExerciseList();
  }, [setExerciseList]);

  const list = exerciseList.map((e: any) => {    
    return <List key={e.name} name={e.name} items={e.exercises} />;
  });

  return (
    <ul>
      {list}
    </ul>
  );
}

export default ExerciseList;
