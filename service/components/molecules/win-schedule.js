import React, { useEffect, useState } from 'react';
import { GameItem, SectionContainer } from '..';

export const WinSchedules = () => {
  const [accordionVisible, setVisible] = useState('');
  const [video, setVideo] = useState();
  const [answer, setAnswer] = useState('');
  const [intervalTime, setIntervalTime] = useState();

  const setItemVisible = index => {
    if (index !== accordionVisible) {
      setVisible(index);
    }
  };

  const fetchVideo = async () => {
    const oJson = {"url":"https://vimeo.com/515848789","city":"SAN_FRANCISCO","now":1614351680012}
    setVisible(oJson?.city);
    setVideo(`https://player.vimeo.com/video/${oJson.url?.split('/').reverse()[0]}`);
  };

  const aData = [
    {
      date: 'Feb 24, 2021 16:00:00 UTC+09:00',
      destination: 'Tokyo, JP',
      hour: '16:00 UTC+9',
      ht: 'Tokyo',
      video: 'https://player.vimeo.com/video/515841426',
    },
    {
      date: 'Feb 24, 2021 17:00:00 UTC+09:00',
      destination: 'Seoul, KOR',
      hour: '17:00 UTC+9',
      ht: 'Seoul',
      video: 'https://player.vimeo.com/video/515842327',
    },
    {
      date: 'Feb 24, 2021 17:00:00 UTC+08:00',
      destination: 'Shanghai, CN',
      hour: '17:00 UTC+8',
      ht: 'Shanghai',
      video: 'https://player.vimeo.com/video/515843265',
    },
    {
      date: 'Feb 24, 2021 17:00:00 UTC+07:00',
      destination: 'Hanoi, VN',
      hour: '17:00 UTC+7',
      ht: 'Hanoi',
      video: 'https://player.vimeo.com/video/515843905',
    },
    {
      date: 'Feb 24, 2021 14:00:00 UTC+03:00',
      destination: 'Moscow, RU',
      hour: '14:00 UTC+3',
      ht: 'Moscow',
      video: 'https://player.vimeo.com/video/515844733',
    },
    {
      date: 'Feb 24, 2021 15:00:00 UTC+03:00',
      destination: 'Istanbul, TR',
      hour: '15:00 UTC+3',
      ht: 'Istanbul',
      video: 'https://player.vimeo.com/video/515845437',
    },
    {
      date: 'Feb 24, 2021 14:00:00 UTC+01:00',
      destination: 'Zurich, CH',
      hour: '14:00 UTC+1',
      ht: 'Zurich',
      video: 'https://player.vimeo.com/video/515846141',
    },
    {
      date: 'Feb 24, 2021 15:00:00 UTC+01:00',
      destination: 'Madrid, ES',
      hour: '15:00 UTC+1',
      ht: 'Madrid',
      video: 'https://player.vimeo.com/video/515846998',
    },
    {
      date: 'Feb 24, 2021 12:00:00 UTC-03:00',
      destination: 'Sao Paulo, BR',
      hour: '12:00 UTC-3',
      ht: 'SaoPaolo',
      video: 'https://player.vimeo.com/video/515847802',
    },
    {
      date: 'Feb 24, 2021 8:00:00 UTC-09:00',
      destination: 'San Francisco, USA',
      hour: '8:00 UTC-9',
      ht: 'SF',
      video: 'https://player.vimeo.com/video/515848789',
    }
  ];

  const getCurrentCityFromTimestamp = (dateTimestamp) => {
    const citiesAfter = aData.filter( city => dateTimestamp - new Date(city.date).getTime() < 0 )
    return citiesAfter.length > 0 ? citiesAfter[0] : {
      date: 'Feb 24, 2021 15:59:59 UTC+09:00',
      destination: 'Unknown, ??',
      hour: '15:59 UTC+9',
      ht: 'Unknown',
      video: 'UNKNOWN',
    }
  }

  const getIntervalTime = () => {
    const nextCity = getCurrentCityFromTimestamp(new Date().getTime())
    const msDiff = new Date(nextCity.date).getTime() - (new Date().getTime());
    return msDiff;
  };

  useEffect(() => {
    const loadVideo = async () => {
      //await fetchVideo();
      setVisible(aData[0].video);
      const diff = getIntervalTime()
      setTimeout(() => {
        setIntervalTime(diff)
      }, diff)
    }
    loadVideo();
  }, [intervalTime]);

  const getTwitterIntent = (sDestination) => {
    let sUrl = `https://twitter.com/intent/tweet?text=@hoprnet It\'s $HOPR launch day! My answer is ${answer}&hashtags=${sDestination},HOPRLaunch`;
    return encodeURI(sUrl);
  };

  return (
    <SectionContainer extraClass="banners hours">
      {aData.map(oItem => (
        <GameItem
          answer={answer}
          date={oItem.date}
          destination={oItem.destination}
          hour={oItem.hour}
          key={oItem.video}
          onClick={() => setItemVisible(oItem.video)}
          onFetch={() => fetchVideo()}
          setAnswer={setAnswer}
          to={getTwitterIntent(oItem.ht)}
          video={oItem.video}
          visible={accordionVisible === oItem.video}
        />
      ))}
    </SectionContainer>
  );
};
