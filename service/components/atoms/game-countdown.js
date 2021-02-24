import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const intialState = {
  hours: '00',
  minutes: '00',
  seconds: '00',
};

export const GameCountdown = ({
  className,
  endDate,
  onFinish,
}) => {
  const [oEndDate, setEndDate] = useState(null);
  const [oTimeLeft, setTimeLeft] = useState(intialState);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (endDate) {
      setEndDate(new Date(endDate));
    }
  }, [endDate]);

  useEffect(() => {
    let oTimer;
    if (!finish) {
      oTimer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    } else {
      clearTimeout(oTimer);
    }

    return () =>
      clearTimeout(oTimer);
  });

  const calculateTimeLeft = () => {
    const nToDate = oEndDate ? oEndDate.getTime() : new Date().getTime();
    const now = new Date().getTime();
    const difference = nToDate - now;
    if (difference <= 0) {
      onFinish();
      setFinish(!finish);
    }
    let timeLeft = {
      ...intialState,
    };

    if (difference > 0) {
      const nDays = Math.floor(difference / (1000 * 60 * 60));
      timeLeft.hours = (`0${Math.floor((difference / (1000 * 60 * 60)))}`).slice(-2);
      timeLeft.minutes = (`0${Math.floor((difference / 1000 / 60) % 60)}`).slice(-2);
      timeLeft.seconds = (`0${Math.floor((difference / 1000) % 60)}`).slice(-2);
    }

    return timeLeft;
  };

  return (
    <p className={className}>
      {oTimeLeft.hours}:
      {oTimeLeft.minutes}:
      {oTimeLeft.seconds}
    </p>
  );
};

GameCountdown.propTypes = {
  className: PropTypes.string,
  endDate: PropTypes.string,
  onFinish: PropTypes.func,
};

