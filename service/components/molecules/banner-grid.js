import React from 'react';
import { BannerItem, SectionContainer } from '..';

const onClickBanner = () => {
  console.log('Aqui');
};

export const BannerGrid = () => {
  return (
    <SectionContainer extraClass="banners">
      <div className="banner-row">
        <BannerItem
          onClick={onClickBanner}
          blindText="Jungfrau Release"
          height="273.88px"
          video="https://player.vimeo.com/video/513101933"
          width="468px"
        />
        <BannerItem
          onClick={onClickBanner}
          blindText="Our Team"
          height="273.88px"
          video="https://player.vimeo.com/video/513096259"
          width="468px"
        />
        <BannerItem
          onClick={onClickBanner}
          blindText="HOPR Hardware Node"
          height="273.88px"
          video="https://player.vimeo.com/video/513096240"
          width="468px"
        />
        <BannerItem
          onClick={onClickBanner}
          blindText="Why Jungfraujoch?"
          height="273.88px"
          video="https://player.vimeo.com/video/513096330"
          width="468px"
        />
        <BannerItem
          onClick={onClickBanner}
          blindText="Making of"
          height="273.88px"
          video="https://player.vimeo.com/video/513096151"
          width="468px"
        />
        <BannerItem
          onClick={onClickBanner}
          blindText="Our Values"
          height="273.88px"
          video="https://player.vimeo.com/video/513096293"
          width="468px"
        />
        <BannerItem
          onClick={onClickBanner}
          blindText="Tech Deepdive"
          height="273.88px"
          video="https://player.vimeo.com/video/513105733"
          width="468px"
        />
        <BannerItem
          alt="Banner 8"
          blindText="Download our Jungfraujoch-Screensaver"
          height="273.88px"
          link="https://assets.hoprnet.org/HOPR_Screensaver.mp4"
          src="/assets/images/win/win-banner-8.jpg"
          width="468px"
        />
      </div>
    </SectionContainer>
  );
};
