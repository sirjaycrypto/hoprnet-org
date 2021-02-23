import React, { useState } from 'react';
import { GameItem, SectionContainer } from '..';

export const WinSchedules = () => {
  const [accordionVisible, setVisible] = useState(null);

  const setItemVisible = index => {
    debugger;
    setVisible(accordionVisible === index ? null : index);
  };

  const aData = [
    {
      date: 'Feb 24, 2021 16:00:00 UTC+09:00',
      destination: 'Tokyo, JP',
      hour: '16:00 UTC+9',
      ht: 'Tokyo',
      video: '',
    },
    {
      date: 'Feb 24, 2021 17:00:00 UTC+09:00',
      destination: 'Seoul, KOR',
      hour: '17:00 UTC+9',
      ht: 'Seoul',
      video: '',
    },
    {
      date: 'Feb 24, 2021 17:00:00 UTC+08:00',
      destination: 'Shangai, CN',
      hour: '17:00 UTC+8',
      ht: 'Shangai',
      video: '',
    },
    {
      date: 'Feb 24, 2021 17:00:00 UTC+07:00',
      destination: 'Hanoi, VN',
      hour: '17:00 UTC+7',
      ht: 'Hanoi',
      video: '',
    },
    {
      date: 'Feb 24, 2021 14:00:00 UTC+03:00',
      destination: 'Moscow, RU',
      hour: '14:00 UTC+3',
      ht: 'Moscow',
      video: '',
    },
    {
      date: 'Feb 24, 2021 15:00:00 UTC+03:00',
      destination: 'Istanbul, TR',
      hour: '15:00 UTC+3',
      ht: 'Istanbul',
      video: '',
    },
    {
      date: 'Feb 24, 2021 14:00:00 UTC+01:00',
      destination: 'Zurich, CH',
      hour: '14:00 UTC+1',
      ht: 'Zurich',
      video: '',
    },
    {
      date: 'Feb 24, 2021 15:00:00 UTC+01:00',
      destination: 'Madrid, ES',
      hour: '15:00 UTC+1',
      ht: 'Madrid',
      video: '',
    },
    {
      date: 'Feb 24, 2021 12:00:00 UTC-03:00',
      destination: 'Sao Paulo, BR',
      hour: '12:00 UTC-3',
      ht: 'SaoPaolo',
      video: '',
    },
    {
      date: 'Feb 24, 2021 12:00:00 UTC-09:00',
      destination: 'San Francisco, USA',
      hour: '12:00 UTC-9',
      ht: 'SF',
      video: '',
    }
  ]

  const getTwitterIntent = (answer, sDestination) => {
    let sUrl = `https://twitter.com/intent/tweet?text=@hopnet It\'s $HOPR launch day! My answer is ${answer}&hashtags=${sDestination},HOPRLaunch`;
    return encodeURI(sUrl);
  };

  return (
    <SectionContainer extraClass="banners hours">
      {aData.map((oItem, nIndex) => (
        <GameItem
          date={oItem.date}
          destination={oItem.destination}
          hour={oItem.hour}
          key={nIndex}
          onClick={() => setItemVisible(nIndex)}
          to={getTwitterIntent('', oItem.ht)}
          visible={accordionVisible === nIndex}
        />
      ))}
    </SectionContainer>
  );
};
