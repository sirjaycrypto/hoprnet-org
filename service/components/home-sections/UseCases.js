import React from 'react';
import { useTranslation } from '../../hooks/translation';

const data = [
  {
    link:
      'https://www.coindesk.com/binance-labs-leads-1m-seed-round-in-crypto-tor-alternative-hopr',
    img: '/assets/images/icons/with-blue-stroke/cloud-data-transfer.png',
    title: 'home:connectDevices.title',
    main: 'home:connectDevices.content',
    delayTime: '100',
  },
  {
    link:
      'https://cointelegraph.com/news/hopr-data-privacy-testnet-to-launch-following-investment-by-binance',
    img: '/assets/images/icons/with-blue-stroke/iris-scan-lock.png',
    title: 'home:makeCrypto.title',
    main: 'home:makeCrypto.content',
    delayTime: '150',
  },
  {
    link:
      'https://www.moneytoday.ch/news/das-schweizer-tech-startup-hopr-sammelt-1-million-dollar-ein-binance-labs-fuehrt-die-investitionsru/',
    img: '/assets/images/icons/with-blue-stroke/hierarchy-8.png',
    title: 'home:digiWithout.title',
    main: 'home:digiWithout.content',
    delayTime: '200',
  },
];

export default function UseCases() {
  const { t } = useTranslation();
  return (
    <section className="section-UseCases change-bg-color the-aux-padding invert-color">
      <div className="container">
        <div data-aos="fade-up">
          <div className="container-sm sub-title">
            <h2>{t('home:useCases.title')}</h2>
          </div>
          <div className="read-text">{t('home:useCases.content')}</div>
        </div>

        <div className="items-list">
          {data.map((e, index) => {
            const { title, main, img, about, delayTime } = e;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={delayTime}
                className="element-item"
              >
                <div className="main">
                  <div className="container-img mb-12">
                    <img src={img} alt={about} />
                  </div>

                  <div>
                    <h4>{t(title)}</h4>
                    <div className="list-text">{t(main)}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
