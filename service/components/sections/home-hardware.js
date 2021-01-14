import React, { forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomeHardware = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();

  return (
    <>
      <section
        ref={ref}
        id="HOPR-NODE-ON-GITHUB"
        className="section-hopr-github "
      >
        <div className="container">
          <div className="container-center-center">
            <h2>{t('home:hardware.title')}</h2>
          </div>
          <div className="flex-line-row">
            <div className="aux-padding-box-read">
              <h3>{t('home:hardware.subtitleA')}</h3>
              <p>{t('home:hardware.about')}</p>
            </div>
            <div className="hardware-hopr">
              <h3>{t('home:hardware.subtitleB')}</h3>
              <img
                src="/assets/images/banner-hardware.png"
                alt={t('home:hardware.title')}
                className="aux-img-cover"
              />
              <p className="caption-image">{t('home:hardware.caption')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeHardware;
