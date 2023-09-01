import FormField from '../../../../../Commons/FormField/FormField';

import './style.scss';

function SetInput() {
  return (
    <div className="set-list-element">
      <div className="set-list-element-div">
        Reps: <FormField type={'number'} name={'nb_reps'} placeholder={''} />
      </div>

      <div className="set-list-element-div">
        Weight:{' '}
        <FormField type={'number'} name={'weight_lifted'} placeholder={''} />
      </div>
    </div>
  );
}

export default SetInput;
