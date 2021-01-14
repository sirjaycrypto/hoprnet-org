import React from 'react';
import Slider from 'react-slick';

import useTranslation from 'next-translate/useTranslation';
export default function Slide() {
  const { t } = useTranslation();
  const dataInfo = [
    {
      title: 'home:slide.slideA',
      paragraph: 'home:slide.slideAMain',
    },
    {
      title: 'home:slide.slideB',
      paragraph: 'home:slide.slideBMain',
    },
    {
      title: 'home:slide.slideC',
      paragraph: 'home:slide.slideCMain',
    },
  ];

  var settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    lazyLoad: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 0,
    slidesToScroll: 0,
    initialSlide: 0,
  };

  return (
    <div className="slider invert-color ">
      <div className="main-slide container">
        <Slider {...settings}>
          {dataInfo.map((e, index) => {
            const { title, paragraph } = e;
            return (
              <div key={index}>
                <p className="text-label-data">&ldquo;{t(paragraph)}&rdquo;</p>
                <p className="text-info">{t(title)}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
