import React from "react";
import Slider from "react-slick";

import useTranslation from "next-translate/useTranslation";
export default function Slide() {
  const { t } = useTranslation();
  const dataInfo = [
    {
      title: "home:slide.slideA",
      paragraph: "home:slide.slideAMain",
    },
    {
      title: "home:slide.slideB",
      paragraph: "home:slide.slideBMain",
    },
    {
      title: "Gin Chao, Strategy Officer of Binance",
      paragraph:'Add a third quote: "The team at HOPR has shown us how their decentralized network achieves privacy guarantees on the metadata level and gives power back to the people.',
    },
  ];

  var settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    lazyLoad: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
                <p className="text-label-data">«{t(paragraph)}»</p>
                <p className="text-info">{t(title)}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
