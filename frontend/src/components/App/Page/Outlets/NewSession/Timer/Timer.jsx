import { useEffect, useState } from 'react';
import Button from '../../../../../Commons/Button/Button';
import Countdown from './Countdown/Countdown';
import Box from '../../../../../Commons/Box/Box';
import Title from '../../../../../Commons/Title/Title';
import TimerInput from './TimerInput/TimerInput';

import './style.scss';

function Timer() {
  const side = ['right', 'center', 'left', 'rest'];
  const [reps, setReps] = useState(3);
  const [timer, setTimer] = useState(0);
  const [sideIndex, setSideIndex] = useState(0);
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    setTimer(reps * 120 - 30);
  }, [reps]);

  const handleStart = () => {
    if (timer > 0) {
      setIsLaunched(true);
      const countdownInterval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            clearInterval(countdownInterval);
            clearInterval(restInterval);
            setIsLaunched(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);

      const sideInterval = setInterval(() => {
        setSideIndex((prevIndex) => {
          if (prevIndex === side.length - 1) {
            return 0;
          }
          const newIndex = prevIndex + 1;
          return newIndex;
        });
      }, 30000);

      return () => {
        clearInterval(countdownInterval);
        clearInterval(sideInterval);
      };
    }
  };

  return (
    <>
      <Box backgroundColor="#222" color="#efefef">
        <Title level="2" text="tightening" />

        <TimerInput reps={reps} setReps={setReps} isLaunched={isLaunched} />

        <div
          className="countdown-section"
          style={side[sideIndex] === 'rest' ? { color: '#EE5D5D' } : {}}
        >
          <Countdown timer={timer} isLaunched={isLaunched} />
          <div
            className="countdown-info"
            style={isLaunched ? {} : { display: 'none' }}
          >
            {side[sideIndex]}
          </div>
        </div>

        <Button
          type="button"
          value={isLaunched ? 'started' : 'start'}
          onClick={handleStart}
          disabled={isLaunched ? true : false}
          style={
            isLaunched
              ? { backgroundColor: '#555', color: '#efefef' }
              : { backgroundColor: '#84dcc6', color: '#222' }
          }
        />
      </Box>
    </>
  );
}

export default Timer;
