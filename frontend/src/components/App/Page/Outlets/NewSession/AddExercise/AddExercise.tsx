import {
  useState,
  useEffect,
  useRef,
  cloneElement,
  Dispatch,
  SetStateAction,
} from 'react';
import axiosInstance from '../../../../../../utils/axios';
import SelectField from '../../../../../Commons/SelectField/SelectField';
import SetInput from '../SetInput/SetInput';
import Button from '../../../../../Commons/Button/Button';
import Box from '../../../../../Commons/Box/Box';

import './style.scss';
import { useCurrentSessionContext } from '../../../../../../contexts/CurrentSessionContext';

interface AddExerciseProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

function AddExercise({ setIsOpen }: AddExerciseProps) {
  const [exercises, setExercices] = useState([]);
  const [allSet, setAllSet] = useState([<SetInput />]);

  const formRef = useRef();

  const { addExercise, displayExercises } = useCurrentSessionContext();

  const fetchExercises = async () => {
    await axiosInstance('/exercise-list').then((response) => {
      setExercices(response.data);
    });
  };

  useEffect(() => {
    fetchExercises();
    displayExercises();
  }, []);


  const handleAddSet = () => {
    setAllSet([...allSet, <SetInput key={allSet.length} />]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const objData = Object.fromEntries(formData);
    addExercise(objData);
    //addSets(data);

    // hide form
    setIsOpen(false);
    // clear form
  };

  return (
    <Box align="left" backgroundColor={'#efefef'} color={'#222'}>
      <form className="add-set-form" onSubmit={handleSubmit} ref={formRef}>
        <SelectField
          list={exercises}
          selectName={'exercise_id'}
          selectId={'exercise_id'}
          icon="ph:barbell"
          required={true}
        />

        <section className="exercise-box-content">
          <ul className="set-list">
            {allSet.map((e, index) => (
              <li key={index} className="set-list-item">
                {cloneElement(e, {
                  repsInputName: `nb_reps_${index}`,
                  weightInputName: `weight_lifted_${index}`,
                })}
              </li>
            ))}
          </ul>

          <div className="add-set-button" onClick={handleAddSet}>
            + add one
          </div>
          <Button type={'submit'} value={'done'} onClick={undefined} />
        </section>
      </form>
    </Box>
  );
}

export default AddExercise;
