import FormField from '../../../../../Commons/FormField/FormField';
import Button from '../../../../../Commons/Button/Button';
import { useUserContext } from '../../../../../../contexts/UserContext';

function ChangePwd() {
  const { changePwd } = useUserContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const objData = Object.fromEntries(formData);

    changePwd(objData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        <FormField
          type={'password'}
          name={'current_password'}
          placeholder={'current password'}
          required
        />

        <FormField
          type={'password'}
          name={'new_password'}
          placeholder={'new password'}
          required
        />

        <FormField
          type={'password'}
          name={'confirm_password'}
          placeholder={'confirm password'}
          required
        />

        <Button type={'submit'} value={'change password'} onClick={undefined} />
      </form>
    </>
  );
}

export default ChangePwd;
