import { useEffect } from 'react';
import { useUserContext } from '../../../../../../contexts/UserContext';
import Button from '../../../../../Commons/Button/Button';
import FormField from '../../../../../Commons/FormField/FormField';

function DeleteAccount() {
  const { code, generateCode, getACode, deleteAccount } = useUserContext();

  // useEffect(() => {
  //   generateCode();
  // }, []);

  //console.log(code);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const objData = Object.fromEntries(formData);

    deleteAccount(objData);
  };

  return (
    <>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        onSubmit={handleSubmit}
      >
        <p>
          This action is irreversible!
          <br />
          All your data will be deleted from our servers.
        </p>

        <p>Write the code below:</p>

        <p>{generateCode()}</p>

        <FormField type={'text'} name={'code'} placeholder={'code'} required />

        <FormField
          type={'password'}
          name={'password'}
          placeholder={'confirm your password'}
          required
        />

        <Button
          type={'submit'}
          value={'confirm delete'}
          isNo
          onClick={undefined}
        />
      </form>
    </>
  );
}

export default DeleteAccount;
