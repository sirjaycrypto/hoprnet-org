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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider invert-color ">
      <div className="main-slide ">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>1</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
