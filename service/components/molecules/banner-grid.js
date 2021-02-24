import React from 'react';
import { BannerItem, SectionContainer } from '..';

const aVideos = [
  {
    title: 'Jungfrau Release',
    video: 'https://vimeo.com/513101933',
    preview: 'https://i.vimeocdn.com/video/1064325853.webp',
  },
  {
    title: 'Our Team',
    video: 'https://vimeo.com/513096259',
    preview: 'https://i.vimeocdn.com/video/1062368155.webp',
  },
  {
    title: 'HOPR Hardware Node',
    video: 'https://vimeo.com/513096240',
    preview: 'https://i.vimeocdn.com/video/1062367955.webp',
  },
  {
    title: 'Why Jungfraujoch?',
    video: 'https://vimeo.com/513096330',
    preview: 'https://i.vimeocdn.com/video/1062371659.webp',
  },
  {
    title: 'Making of',
    video: 'https://vimeo.com/513096151',
    preview: 'https://i.vimeocdn.com/video/1064325388.webp',
  },
  {
    title: 'Our Values',
    video: 'https://vimeo.com/513096293',
    preview: 'https://i.vimeocdn.com/video/1062368114.webp',
  },
  {
    title: 'Win a Trip!',
    video: 'https://vimeo.com/514633549',
    preview: 'https://i.vimeocdn.com/video/1065570649.webp',
  },
  {
    title: 'Tech Deepdive',
    video: 'https://vimeo.com/513105733',
    preview: 'https://i.vimeocdn.com/video/1062385601.webp',
  },
]

export const BannerGrid = () => {

  return (
    <SectionContainer extraClass="banners">
      <div className="banner-row">
        {aVideos.map(({ title, video, preview }, nIndex) => (
          <BannerItem
            blindText={title}
            key={nIndex}
            preview={preview}
            video={video}
          />
        ))}
        <BannerItem
          alt="Download Screensaver"
          blindText="Download our Jungfraujoch-Screensaver"
          link="https://assets.hoprnet.org/HOPR_Screensaver.mp4"
          src="/assets/images/win/win-banner-8.jpg"
        />
      </div>
    </SectionContainer>
  );
};
