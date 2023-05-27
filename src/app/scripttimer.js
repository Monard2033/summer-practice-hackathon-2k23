import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds === 0 ? 30 : prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <h4>{seconds} seconds</h4>
    </div>
  );
};

export default Timer;
