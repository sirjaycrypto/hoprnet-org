import React from 'react';
import { useTranslation } from '../../hooks/translation';

const data = [
  {
    img: '/assets/images/HOPR_USE_CASE_MEDTECH.gif',
    title: 'home:connectDevices.title',
    main: 'home:connectDevices.content',
    mirrorBox: true,
  },
  {
    img: '/assets/images/HOPR_USE_CASE_CRYPTO.gif',
    title: 'home:makeCrypto.title',
    main: 'home:makeCrypto.content',
    mirrorBox: false,
  },
];

export default function UseCases() {
  const { t } = useTranslation();
  return (
    <section className="section-UseCases change-bg-color the-aux-padding invert-color section-UseCases-only">
      <div className="container">
        <div data-aos="fade-up">
          <div className="container-sm sub-title">
            <h2>{t('home:useCases.title')}</h2>
          </div>
          <div className="read-text">{t('home:useCases.content')}</div>
        </div>

        {data.map((x, i) => (
          <div
            key={i}
            className={`info-box-line ${x.mirrorBox ? 'flex-line' : ''}`}
          >
            <div className="info-cont aux-padding-box-read">
              <h3>{t(x.title)}</h3>
              <p className="padding-bottom">{t(x.main)}</p>
            </div>
            <div>
              <img src={x.img} alt={x.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
