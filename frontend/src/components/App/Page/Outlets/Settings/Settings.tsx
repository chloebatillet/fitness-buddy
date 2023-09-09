import Section from '../../../../Commons/Section/Section';
import AccountSettings from './AccountSettings/AccountSettings';
import ExerciseSettings from './ExerciseSettings/ExerciseSettings';

function Settings() {
  return (
    <>
      <Section
        titleDetails={{
          level: '2',
          text: 'account settings',
          icon: 'solar:user-circle-linear',
        }}
        id="account-settings"
        content={<AccountSettings />}
      />

      <Section
        titleDetails={{
          level: '2',
          text: 'manage exercise list',
          icon: 'ph:barbell',
        }}
        id="exercise-list-settings"
        content={<ExerciseSettings />}
      />
    </>
  );
}

export default Settings;
