import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import useTranslation from "next-translate/useTranslation";
export default function Slide() {
  const { t } = useTranslation();
  const dataInfo = [
    {
      title: "homeSlide:slideA",
      paragraph: "homeSlide:slideAMain",
    },
    {
      title: "homeSlide:slideB",
      paragraph: "homeSlide:slideBMain",
    },
    {
      title: "homeSlide:slideC",
      paragraph: "homeSlide:slideCMain",
    },
  ];

  var settings = {
    arrows: false,
    autoplay:true,
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };

  return (
    <div className="slider invert-color ">
      <div className="main-slide ">
        <Slider {...settings}>
          {dataInfo.map((e, index) => {
            const { title, paragraph } = e;
            return (
              <div key={index}>
                <p className="text-info">«{t(title)}»</p>
                <p className="text-label-data">{t(paragraph)}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
