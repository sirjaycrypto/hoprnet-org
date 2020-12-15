import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [num, setNum] = useState(34);

  
  return (
    <div className="info-hero-top">
      <p className="help-label-info">COUNTDOWN {num}</p>
    </div>
  );
}
