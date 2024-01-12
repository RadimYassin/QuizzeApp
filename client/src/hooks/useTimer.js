import { useState, useEffect } from 'react';

export default function useTimer(initialTime, callback, interval = 1000) {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
      const customInterval = setInterval(() => {
        setTime(prevTime => (prevTime > 0 ? prevTime - interval : prevTime));
      }, interval);
  
      if (time === 0) {
        callback();
      }
  
      return () => clearInterval(customInterval);
    }, [time]);
  
    return time;
}
