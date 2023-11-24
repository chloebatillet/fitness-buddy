import { useEffect, useState } from 'react';

import './style.scss';

interface CountdownProps {
  timer: number;
  isLaunched: boolean;
  style: {};
}

function Countdown({ timer, style, isLaunched }: CountdownProps) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMinutes(Math.floor(timer / 60));
    setSeconds(timer % 60 < 10 ? 0 + (timer % 60) : timer % 60);
  }, [timer]);

  return (
    <div className="countdown-section" style={style}>
      {minutes}:{seconds}
      <div
        className="countdown-animation"
        style={isLaunched ? {} : { display: 'none' }}
      ></div>
    </div>
  );
}

export default Countdown;
