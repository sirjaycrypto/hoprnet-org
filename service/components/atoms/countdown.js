import React, { useState, useEffect } from "react";

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Format time
 */
const formatTime = (time) => {
  let formattedTime = "";
  if (time <= 9) {
    formattedTime = "0" + time;
  } else {
    formattedTime = time;
  }
  return formattedTime;
};

export default function Countdown() {
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  const [datePlus, setDatePlus] = useState(addDays(new Date().getTime(), 7));

  useEffect(() => {
    clearInterval(timerInterval);
    const timerInterval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  const updateTime = () => {
    let delta = (datePlus - new Date().getTime()) / 1000; // total of seconds passed between this two dates
    // calculate (and subtract) whole days
    let dd = Math.floor(delta / 86400);
    delta -= dd * 86400;

    // calculate (and subtract) whole hours
    let hh = Math.floor(delta / 3600) % 24;
    delta -= hh * 3600;

    // calculate (and subtract) whole minutes
    let mm = Math.floor(delta / 60) % 60;
    delta -= mm * 60;

    dd = formatTime(parseInt(dd, 10));
    hh = formatTime(parseInt(hh, 10));
    mm = formatTime(parseInt(mm, 10));

    setMinutes(mm);
    setHours(hh);
    setDays(dd);
  };

  return (
    <div className="info-hero-top">
      <p className="help-label-info">
        END OF SALE {days}:{hours}:{minutes}
      </p>
    </div>
  );
}
