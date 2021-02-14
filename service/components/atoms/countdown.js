import React, { useState, useEffect } from 'react';

export const Countdown = () => {
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
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const addCeroIfNeed = (num) => (`0${num}`).slice(-2);

  return (
    <div id="clockDiv">
      <div>
        <span className="days">{timeLeft.days}</span>
      </div>
      <span>:</span>
      <div>
        <span className="hours">{addCeroIfNeed(timeLeft.hours)}</span>
      </div>
      <span>:</span>
      <div>
        <span className="minutes">{addCeroIfNeed(timeLeft.minutes)}</span>
      </div>
      <span>:</span>
      <div>
        <span className="seconds">{addCeroIfNeed(timeLeft.seconds)}</span>
      </div>
    </div>
  );
};

export default Countdown;
