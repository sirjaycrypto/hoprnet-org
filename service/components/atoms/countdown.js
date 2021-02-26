import React, { useState, useEffect } from 'react';

export const Countdown = ({title}) => {
  const calculateTimeLeft = () => {
    const countDownDate = new Date('Feb 24, 2021 14:00:00 GMT+01:00').getTime();
    const now = new Date().getTime();
    const difference = countDownDate - now;
    const timeLeft = {};
    if (difference > 0) {
      timeLeft.days = Math.floor(difference / (1000 * 60 * 60 * 24));
      timeLeft.hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      timeLeft.minutes = Math.floor((difference / 1000 / 60) % 60);
      timeLeft.seconds = Math.floor((difference / 1000) % 60);
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = !title && setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const addCeroIfNeed = (num) => (`0${num}`).slice(-2);

  return (
    <div id="clockDiv">
      {
        title ?
          <>
            <span>{title}</span>
          </> :
          <>
            <div>
              <span className="days">00</span>
            </div>
            <span>:</span>
            <div>
              <span className="hours">00</span>
            </div>
            <span>:</span>
            <div>
              <span className="minutes">00</span>
            </div>
            <span>:</span>
            <div>
              <span className="seconds">00</span>
            </div>
          </>
      }
    </div>
  );
};

export default Countdown;
