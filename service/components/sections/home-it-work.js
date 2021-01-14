import React, { forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomeHomeItWork = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const dataInfo = [
    {
      img: '/assets/images/hopr_Private.gif',
      title: 'home:work.private',
      paragraph: 'home:work.privateMain',
      mirrorBox: false,
    },
    {
      img: '/assets/images/hopr_Profitable.gif',
      title: 'home:work.profitable',
      paragraph: 'home:work.profitableMain',
      mirrorBox: true,
    },
    {
      img: '/assets/images/hopr_Performant.gif',
      title: 'home:work.performant',
      paragraph: 'home:work.performantMain',
      mirrorBox: false,
    },
  ];

  return (
    <>
      <section
        ref={ref}
        id="HOW-DOES-IT-WORK"
        className="section-how-work padding-section-aux"
      >
        <div className="container">
          <div className="container-center-center">
            <h2>{t('home:work.title')}</h2>
          </div>
          <div className="element-boxing">
            {dataInfo.map((e, index) => {
              const { img, title, paragraph, mirrorBox } = e;
              return (
                <div
                  key={index}
                  className={'info-box-line ' + (mirrorBox ? 'flex-line' : '')}
                >
                  <div className="info-cont aux-padding-box-read">
                    <h3>{t(title)}</h3>
                    <p className="padding-bottom">{t(paragraph)}</p>
                  </div>
                  <div>
                    <img src={img} alt={t(title)} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeHomeItWork;
