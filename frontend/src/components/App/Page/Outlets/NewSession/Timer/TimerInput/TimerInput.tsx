import Button from '../../../../../../Commons/Button/Button';
import ButtonRound from '../../../../../../Commons/ButtonRound/ButtonRound';

import './style.scss';

interface TimerInputProps {
  reps: number;
  setReps: React.Dispatch<React.SetStateAction<number>>;
  isLaunched: boolean;
}

function TimerInput({ reps, setReps, isLaunched }: TimerInputProps) {
  const handleChangeReps = (e: any) => {
    if (e.currentTarget.value === '-' && reps < 1) {
      setReps(0);
      return;
    }
    e.currentTarget.value === '-' ? setReps(reps - 1) : setReps(reps + 1);
  };

  return (
    <div className='set-timer-input-section'>
      <ButtonRound
        type={'button'}
        value={'-'}
        onClick={handleChangeReps}
        disabled={isLaunched}
      />
      <input
        className="set-timer-input"
        type="number"
        value={reps}
        disabled
        // onChange={(e) => {
        //   setReps(Number(e.currentTarget.value));
        //   if (e.currentTarget.value < 1) {
        //     setReps(0);
        //   }
        // }}
      />
      <ButtonRound
        type={'button'}
        value={'+'}
        onClick={handleChangeReps}
        disabled={isLaunched}
      />
    </div>
  );
}

export default TimerInput;
