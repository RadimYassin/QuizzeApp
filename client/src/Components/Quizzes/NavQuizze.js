import React, { useEffect, useState } from 'react'
import Clock from './clock/Clock'
import QuiteQuizze from './modal/QuiteQuizze';



export default function NavQuizze({initialTimeInSeconds,handleTimerEnd}) {
  
  const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeInSeconds((prevTime) => {
        const newTime = prevTime - 1;
        if (newTime === 0) {
          clearInterval(intervalId); // Clear the interval when time reaches 0
          handleTimerEnd(); // Execute the callback function
        }
        return newTime;
      });
    }, 1000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once on mount

  // Calculate minutes and seconds from total seconds
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  // Format minutes and seconds with leading zeros
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      <div className=" rounded-lg flex justify-center   lg:justify-start items-center ">

        <span className="whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-md text-green-700">{formattedMinutes} : {formattedSeconds}</span>
      </div>
      <div className=" rounded-lg flex justify-center ">
        <Clock />
      </div>
      <div className=" rounded-lg flex justify-center   lg:justify-end items-center ">

        <QuiteQuizze/>  </div>
    </div>
  )
}
