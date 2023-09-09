import ButtonLight from '../../../../../Commons/ButtonLight/ButtonLight';
import EditInfo from './EditInfo';
import ChangePwd from './ChangePwd';
import Summary from '../../../../../Commons/Summary/Summary';
import DeleteAccount from './DeleteAccount';

function AccountSettings() {

  return (
    <>
      {/* edit info */}
      <Summary
        title={'edit my informations'}
        icon="clarity:note-edit-line"
        content={<EditInfo />}
      />

      {/* change pwd */}
      <Summary
        title={'change my password'}
        icon="solar:password-linear"
        content={<ChangePwd />}
      />

      {/* delete account */}
      <Summary
        title={'delete my account'}
        icon="fluent:delete-24-regular"
        content={<DeleteAccount />}
      />
    </>
  );
}

export default AccountSettings;
