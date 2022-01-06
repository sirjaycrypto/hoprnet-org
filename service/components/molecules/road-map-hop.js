import React from 'react';
import Moment from 'moment';

const RoadMapHop = ({ data, className }) => {
  return (
    <div className={`road-map-hop ${className}`}>
      {data.map((x, i) => (
        <div
          className={`road-map-element ${x.customClass ? x.customClass : ''}`}
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
