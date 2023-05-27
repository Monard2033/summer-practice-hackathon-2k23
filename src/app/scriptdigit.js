import React, { useState, useEffect } from 'react';

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState('');

  const generateRandomNumber = () => {
    const min = 100000; 
    const max = 999999; 
    const generatedNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(generatedNumber.toString());
  };

  useEffect(() => {
    const currentSeconds = new Date().getSeconds();
    const remainingSeconds = 30 - (currentSeconds % 30);

    generateRandomNumber(); 

    const timeout = setTimeout(() => {
      generateRandomNumber(); 
      const interval = setInterval(generateRandomNumber, 30000); 
      return () => clearInterval(interval); 
    }, remainingSeconds * 1000);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div>
      <p> {randomNumber}</p>
    </div>
  );
};

export default RandomNumberGenerator;
