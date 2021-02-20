import React from 'react';

import { GameCountdown, SectionContainer } from '..';

export const WinSchedules = ({

}) => {
  return (
    <SectionContainer extraClass="banners hours">
      <div className="event-item">
        <p>Tokyo, JP</p>
        <p>16:00 GMT+9</p>
        <GameCountdown endDate="Feb 21, 2021 16:00:00 GMT+09:00" />
      </div>
      <div className="event-item">
        <p>Seoul, KOR</p>
        <p>17:00 GMT+9</p>
        <GameCountdown endDate="Feb 21, 2021 17:00:00 GMT+09:00" />
      </div>
      <div className="event-item">
        <p>Shangai, CN</p>
        <p>17:00 GMT+8</p>
        <GameCountdown endDate="Feb 21, 2021 17:00:00 GMT+08:00" />
      </div>
      <div className="event-item">
        <p>Hanoi, VN</p>
        <p>17:00 GMT+7</p>
        <GameCountdown endDate="Feb 21, 2021 17:00:00 GMT+07:00" />
      </div>
      <div className="event-item">
        <p>Moscow, RU</p>
        <p>14:00 GMT+3</p>
        <GameCountdown endDate="Feb 21, 2021 14:00:00 GMT+03:00" />
      </div>
      <div className="event-item">
        <p>Istanbul, TR</p>
        <p>15:00 GMT+3</p>
        <GameCountdown endDate="Feb 21, 2021 15:00:00 GMT+03:00" />
      </div>
      <div className="event-item">
        <p>Zurich, CH</p>
        <p>14:00 GMT+1</p>
        <GameCountdown endDate="Feb 21, 2021 14:00:00 GMT+01:00" />
      </div>
      <div className="event-item">
        <p>Madrid, ES</p>
        <p>15:00 GMT+1</p>
        <GameCountdown endDate="Feb 21, 2021 15:00:00 GMT+01:00" />
      </div>
      <div className="event-item">
        <p>Sao Paulo, BR</p>
        <p>12:00 GMT-3</p>
        <GameCountdown endDate="Feb 21, 2021 12:00:00 GMT-03:00" />
      </div>
      <div className="event-item">
        <p>San Francisco, USA</p>
        <p>12:00 GMT-9</p>
        <GameCountdown endDate="Feb 21, 2021 12:00:00 GMT-09:00" />
      </div>
    </SectionContainer>
  );
};
