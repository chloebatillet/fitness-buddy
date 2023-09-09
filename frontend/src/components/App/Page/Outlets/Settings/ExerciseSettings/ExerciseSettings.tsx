import { useEffect, useState } from 'react';

import ButtonLight from '../../../../../Commons/ButtonLight/ButtonLight';
import ExerciseList from '../../Homepage/ExerciseList/ExerciseList';
import Modal from '../../../../../Commons/Modal/Modal';
import NewExerciseForm from './NewExerciseForm/NewExerciseForm';

import { useExerciseContext } from '../../../../../../contexts/ExerciseContext';

function ExerciseSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const { bodypartList, getBodypartList } = useExerciseContext();

  useEffect(() => {
    getBodypartList();
  }, []);

  return (
    <>
      <ButtonLight
        text={'add one'}
        icon="ic:round-add"
        handleClickFunction={() => setIsOpen(true)}
      />
      <ExerciseList />

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleConfirm={() => {}}
        message={<NewExerciseForm bodypartList={bodypartList} setIsOpen={setIsOpen} />}
        acceptMessage="add"
        refuseMessage="cancel"
        defaultBtn={false}
      />
    </>
  );
}

export default ExerciseSettings;
