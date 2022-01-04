import React from 'react';
import Moment from 'moment'

const RoadMapHop = ({data, className}) => {
  return (
    <div className={`road-map-hop ${className}`} >
      {data.map((x, i) => (
        <div className={`road-map-element ${x.week == Moment().week() - 1 ? "road-map-element-week" : ""}`} key={i}>
          <div className="road-map-titles-left">
            <div className="roap-map-title-1">
              <span>{x.title_1}</span>
            </div>
            <div className="roap-map-title-2">
              <span>{x.title_2}</span>
            </div>
          </div>
          <div className="line-help">
            <span></span>
          </div>
          <div className="area-info">
            <span className={x.title_3 ? "" : "road-map-element-rectangle"}>{x.title_3}</span>
          </div>
        </div>
      ))}
    </div>
  );
};


export default RoadMapHop;
