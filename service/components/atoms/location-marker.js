import React, { useState, useEffect, forwardRef } from "react";

export default function LocationMarker() {
  const [changePosition, setChangePosition] = useState(false);

  useEffect(() => {
    if (window.matchMedia("screen and (min-width: 797px)").matches) {
      setChangePosition(true);
    }
  }, []);

  return (
    <div className={changePosition ?  "info-hero-bottom" : "info-hero-top"}>
      <p className="help-label-info">Jungfraujoch, Switzerland, 3454 masl</p>
    </div>
  );
}
