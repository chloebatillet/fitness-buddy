import FormField from '../../../../../Commons/FormField/FormField';

import './style.scss';

interface SetInputProps {
  repsInputName?: string;
  weightInputName?: string;
  set?: {
    nb_reps: number;
    weight_lifted: number;
  };
}

function SetInput({ set, repsInputName, weightInputName }: SetInputProps) {
  
  return (
    <div className="set-list-element">
      <div className="set-list-element-div">
        Reps:{' '}
        <FormField
          type={'number'}
          name={repsInputName ? repsInputName : 'nb_reps'}
          placeholder={''}
          value={set?.nb_reps}
          disabled={set ? true : false}
        />
      </div>

      <div className="set-list-element-div">
        Weight:{' '}
        <FormField
          type={'number'}
          name={weightInputName ? weightInputName : 'weight_lifted'}
          placeholder={''}
          value={set?.weight_lifted}
          disabled={set ? true : false}
        />
      </div>
    </div>
  );
}

export default SetInput;
