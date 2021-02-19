import React from 'react';
import { BannerItem, SectionContainer } from '..';

export const BannerGrid = () => {
  return (
    <SectionContainer extraClass="banners">
      <div className="banner-row">
        <BannerItem
          blindText="Jungfrau Release"
          height="273.88px"
          video="https://player.vimeo.com/video/513101933"
          width="468px"
        />
        <BannerItem
          blindText="Our Team"
          height="273.88px"
          video="https://player.vimeo.com/video/513096259"
          width="468px"
        />
        <BannerItem
          blindText="HOPR Hardware Node"
          height="273.88px"
          video="https://player.vimeo.com/video/513096240"
          width="468px"
        />
        <BannerItem
          blindText="Why Jungfraujoch?"
          height="273.88px"
          video="https://player.vimeo.com/video/513096330"
          width="468px"
        />
        <BannerItem
          blindText="Making of"
          height="273.88px"
          video="https://player.vimeo.com/video/513096151"
          width="468px"
        />
        <BannerItem
          blindText="Our Values"
          height="273.88px"
          video="https://player.vimeo.com/video/513096293"
          width="468px"
        />
        <BannerItem
          blindText="Tech Deepdive"
          height="273.88px"
          video="https://player.vimeo.com/video/513105733"
          width="468px"
        />
        <BannerItem
          alt="Banner 8"
          blindText="Download our Jungfraujoch-Screensaver"
          height="273.88px"
          onClick="/assets/video/Screensaver.mp4"
          src="/assets/images/win/win-banner-8.jpg"
          width="468px"
        />
      </div>
    </SectionContainer>
  );
};
