// Timer.js
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup function
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h2>useEffect Hook Example</h2>
      <p>Seconds elapsed: {seconds}</p>
    </div>
  );
}

export default Timer;
