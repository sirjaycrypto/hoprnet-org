import React from 'react';

import { SectionContainer } from '..';

export const WinSchedules = ({

}) => {
  return (
    <SectionContainer extraClass="banners hours">
      <div className="event-item">
        <p>Tokyo, JP</p>
        <p>7 AM GMT+9</p>
        <p>HH:MM:SS</p>
      </div>
      <div className="event-item">
        <p>Seoul, KOR</p>
        <p>XAM GMT+9</p>
        <p>HH:MM:SS</p>
      </div>
      <div className="event-item">
        <p>Shangai, CN</p>
        <p>2 PM CST</p>
        <p>HH:MM:SS</p>
      </div>
      <div className="event-item">
        <p>Moscow, RU</p>
        <p>XAM GMT+3</p>
        <p>HH:MM:SS</p>
      </div>
      <div className="event-item">
        <p>Istanbul, TR</p>
        <p>XAM GMT+3</p>
        <p>HH:MM:SS</p>
      </div>
      <div className="event-item">
        <p>Zurich, CH</p>
        <p>XAM CET</p>
        <p>HH:MM:SS</p>
      </div>
      <div className="event-item">
        <p>Madrid, ES</p>
        <p>XAM GMT+1</p>
        <p>HH:MM:SS</p>
      </div>
      <div className="event-item">
        <p>Sao Paulo, BR</p>
        <p>XAM GMT-3</p>
        <p>HH:MM:SS</p>
      </div>
      <div className="event-item">
        <p>San Francisco, USA</p>
        <p>XAM GMT-8</p>
        <p>HH:MM:SS</p>
      </div>
    </SectionContainer>
  );
};
