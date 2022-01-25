import React from 'react';
import Moment from 'moment-timezone';

const RoadMapHop = ({ data, className }) => {
  let MomentZurich = Moment().tz("Europe/Zurich");

  return (
    <div className={`road-map-hop ${className}`}>
      {data.map((x, i) => (
        <div
          className={`road-map-element ${x.week == MomentZurich.week() - 1 ? "road-map-element-week" : ""}`}
          key={i}
        >
          <div className="road-map-titles-left">
            {x.title_1 ? (
              <div className="roap-map-title-1">
                <span>{x.title_1}</span>
              </div>
            ) : null}
            <div className="roap-map-title-2">
              <span>{x.title_2}</span>
            </div>
          </div>
          <div className="line-help line-help-hop-on-board">
            <span></span>
          </div>
          <div className="area-info">
            <span className={x.title_3 ? '' : 'road-map-element-rectangle'}>
              {x.title_3}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadMapHop;
