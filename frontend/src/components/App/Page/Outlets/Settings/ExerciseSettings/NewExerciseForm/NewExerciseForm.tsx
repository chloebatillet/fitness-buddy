import { useExerciseContext } from '../../../../../../../contexts/ExerciseContext';
import Button from '../../../../../../Commons/Button/Button';
import FormField from '../../../../../../Commons/FormField/FormField';
import SelectField from '../../../../../../Commons/SelectField/SelectField';
import Title from '../../../../../../Commons/Title/Title';

interface NewExerciseFormProps {
  bodypartList: [];
  setIsOpen: (arg: boolean) => void;
}

function NewExerciseForm({ bodypartList, setIsOpen }: NewExerciseFormProps) {
  const { addNewExercise } = useExerciseContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    addNewExercise(formData);

    setIsOpen(false);
  };

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      onSubmit={handleSubmit}
    >
        <Title level={'3'} text={'Add exercise'} icon='ph:barbell' />
      <FormField
        type='text'
        name='name'
        placeholder='name'
        required
        autoComplete="off"
      />
      <SelectField
        list={bodypartList}
        selectName={'bodypart_id'}
        selectId={'bodypart_id'}
        placeholder={'-- select bodypart --'}
      />
      <Button type={'submit'} value={'add'} onClick={undefined} />
    </form>
  );
}

export default NewExerciseForm;
