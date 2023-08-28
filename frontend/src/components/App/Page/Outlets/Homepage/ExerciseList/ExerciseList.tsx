import List, { ListProps } from '../../../../../Commons/List/List';

import axios from 'axios';

import { useEffect, useState } from 'react';

function ExerciseList() {
  const [exerciseList, setExerciseList] = useState([]);

  const fetchExerciseList = async () => {
    var options = {
      method: 'GET',
      url: 'http://localhost:3000/exercise-list',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImlhdCI6MTY5MzIxMTkxOSwiZXhwIjoxNjkzMjE1NTE5fQ.ZxX2_IldDA0ThZEQPix5zJAi_2wuw8PK-pv0aqd_G44',
      },
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
