import axios from '../../../../../../utils/axios';
import List from '../../../../../Commons/List/List';



import { useEffect, useState } from 'react';

function ExerciseList() {
  const [exerciseList, setExerciseList] = useState([]);

  const fetchExerciseList = async () => {
    var options = {
      method: 'GET',
      url: 'http://localhost:3000/exercise-list',
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
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
    console.log(e);
    console.log(e.exercises);
    
    return <List key={e.name} name={e.name} items={e.exercises} />;
  });

  return (
    <ul>
      {list}
    </ul>
  );
}

export default ExerciseList;
