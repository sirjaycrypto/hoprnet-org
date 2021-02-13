import React, { useState } from 'react';

export const Countdown = () => {
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const countDownDate = new Date('Feb 24, 2021 14:00:00').getTime();
  function addCeroIfNeed(num) {
    let result = ('0' + num).slice(-2);
    return result;
  }

  var time = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(
      addCeroIfNeed(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      )
    );
    setMinutes(
      addCeroIfNeed(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    );
    setSeconds(addCeroIfNeed(Math.floor((distance % (1000 * 60)) / 1000)));
    if (distance < 0) {
      clearInterval(time);
    }
  }, 1000);

  return (
    <div id="clockDiv">
      <div>
        <span className="days">{days}</span>
      </div>
      <span>:</span>
      <div>
        <span className="hours">{hours}</span>
      </div>
      <span>:</span>
      <div>
        <span className="minutes">{minutes}</span>
      </div>
      <span>:</span>
      <div>
        <span className="seconds">{seconds}</span>
      </div>
    </div>
  );
};

export default Countdown;
