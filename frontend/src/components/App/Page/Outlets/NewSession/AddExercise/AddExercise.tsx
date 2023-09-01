import { useState, useEffect } from 'react';
import axiosInstance from '../../../../../../utils/axios';
import SelectField from '../../../../../Commons/SelectField/SelectField';
import SetInput from '../SetInput/SetInput';
import Button from '../../../../../Commons/Button/Button';
import Box from '../../../../../Commons/Box/Box';

import './style.scss';

function AddExercise() {
  const [exercises, setExercices] = useState([]);
  const [allSet, setAllSet] = useState([<SetInput />]);

  const fetchExercises = async () => {
    await axiosInstance('/exercise-list').then((response) => {
      setExercices(response.data);
    });
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const handleAddSet = () => {
    setAllSet([...allSet, <SetInput />]);
  };

  return (
    <section className="add-set-section">
      <Box align="left">
        <form className="add-set-form">
          <SelectField
            list={exercises}
            selectName={'exercise_id'}
            selectId={'exercise_id'}
            icon="ph:barbell"
          />
          <section>
            <ul className="set-list">
              {allSet.map((e, index) => (
                <li key={index} className="set-list-item">
                  {e}
                </li>
              ))}
            </ul>
            <div className="add-set-button" onClick={handleAddSet}>
              + add one
            </div>
          </section>
          <Button type={'submit'} value={'done'} onClick={undefined} />
        </form>
      </Box>
    </section>
  );
}

export default AddExercise;
