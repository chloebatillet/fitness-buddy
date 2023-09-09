import { useUserContext } from '../../../../../../contexts/UserContext';

import FormField from '../../../../../Commons/FormField/FormField';
import Button from '../../../../../Commons/Button/Button';

function EditInfo() {
  const { getUserInfo, editInfo } = useUserContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const objData = Object.fromEntries(formData);

    editInfo(objData);
  };

  return (
    <>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        onSubmit={handleSubmit}
      >
        <FormField
          type={'text'}
          name={'firstname'}
          placeholder={'firstname'}
          value={getUserInfo('firstname')}
        />

        <FormField
          type={'text'}
          name={'lastname'}
          placeholder={'lastname'}
          value={getUserInfo('lastname')}
        />

        <FormField
          type={'email'}
          name={'email'}
          placeholder={'email'}
          value={getUserInfo('email')}
        />

        <Button type={'submit'} value={'save changes'} onClick={undefined} />
      </form>
    </>
  );
}

export default EditInfo;
