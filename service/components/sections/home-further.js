import React, { forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomeFurther = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const infoTop = [
    {
      img: '/assets/brand/logo.svg',
      title: 'home:further.infoTopTitleA',
      paragraph: 'home:further.infoTopTitleAAbout',
    },
    {
      img: '/assets/brand/logo.svg',
      title: 'home:further.infoTopTitleB',
      paragraph: 'home:further.infoTopTitleBAbout',
    },
  ];

  const infoDown = [
    {
      img: '/assets/brand/logo.svg',
      title: 'home:further.infoBottomATitle',
    },
    {
      img: '/assets/brand/logo.svg',
      title: 'home:further.infoBottomBTitle',
    },
    {
      img: '/assets/brand/logo.svg',
      title: 'home:further.infoBottomCTitle',
    },
    {
      img: '/assets/brand/logo.svg',
      title: 'home:further.infoBottomDTitle',
    },
    {
      img: '/assets/brand/logo.svg',
      title: 'home:further.infoBottomETitle',
    },
  ];

  return (
    <>
      <section
        ref={ref}
        id="FURTHER-READING"
        className="section-further  invert-color "
      >
        <div className="container">
          <h2>{t('home:further.title')}</h2>
          <div className="list-top">
            {infoTop.map((e, index) => {
              const { img, title, paragraph } = e;
              return (
                <div key={index} className="element-future">
                  <div className="icon">
                    <img src={img} alt={t(title)} />
                  </div>
                  <div className="info">
                    <h5>{t(title)}</h5>
                    <p>{t(paragraph)}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="row">
              <div className="item">
                <div className="icon">
                  <img
                    src="/assets/brand/logo.svg"
                    alt={t('home:further.infoTopTitleA')}
                  />
                </div>
              </div>
              <div className="item">
                <div className="icon">
                  <img
                    src="/assets/brand/logo.svg"
                    alt={t('home:further.infoTopTitleB')}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <h5>{t('home:further.infoTopTitleA')}</h5>
              </div>
              <div className="item">
                <h5>{t('home:further.infoTopTitleB')}</h5>
              </div>
            </div>
            <div className="row">
              <div className="item">
                <p>{t('home:further.infoTopTitleAAbout')}</p>
              </div>
              <div className="item">
                <p>{t('home:further.infoTopTitleBAbout')}</p>
              </div>
            </div>
          </div>

          <div className="list-down">
            {infoDown.map((e, index) => {
              const { img, title } = e;
              return (
                <div key={index} className="element-future">
                  <div className="icon">
                    <img src={img} alt={t(title)} />
                  </div>
                  <div className="info">
                    <h5>{t(title)}</h5>
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

export default HomeFurther;
