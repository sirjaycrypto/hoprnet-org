import React, { forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { aPartners } from '../home-sections/Partners';

const HomeBacked = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const data = [
    {
      img: '/assets/backed_by_logo/Binance_labs.svg',
      url: 'https://binancelabs.substack.com/',
      title: 'Binance_labs',
    },
    {
      img: '/assets/backed_by_logo/stakely.png',
      url: 'https://stakely.vc/',
      title: 'Stakely',
    },
    {
      img: '/assets/backed_by_logo/01_Caballeros_Logo.svg',
      url: 'http://caballeroscapital.com/',
      title: 'caballeros-capital',
    },
    {
      img: '/assets/backed_by_logo/02_Spark_Logo.svg',
      url: 'https://www.sparkdigitalcapital.com/',
      title: 'spark-digital-capital',
    },
    {
      img: '/assets/backed_by_logo/03_Focus_Labs_Logo_SW_shadow.png',
      url: 'https://focuslabs.io/',
      title: 'focus-labs',
    },
    {
      img: '/assets/backed_by_logo/04_AU21CAPITAL_Logo.svg',
      url: 'https://au21.capital/',
      title: 'au21',
    },
    {
      img: '/assets/backed_by_logo/vendetta_capital.png',
      url: 'https://www.vendetta.capital/',
      title: 'Vendetta',
    },
  ];

  const dataInfoAssSee = [
    {
      url:
        'https://www.coindesk.com/binance-labs-leads-1m-seed-round-in-crypto-tor-alternative-hopr',
      image: 'assets/as_see/coindesk.svg',
    },
    {
      url:
        'https://cointelegraph.com/news/hopr-data-privacy-testnet-to-launch-following-investment-by-binance',
      image: 'assets/as_see/cointelegraph.svg',
    },
    {
      url:
        'https://www.moneytoday.ch/news/das-schweizer-tech-startup-hopr-sammelt-1-million-dollar-ein-binance-labs-fuehrt-die-investitionsru/',
      image: 'assets/as_see/moneytoday.svg',
    },
  ];

  return (
    <>
      <section
        ref={ref}
        id="BACKED-BY"
        className="section-backed invert-color "
      >
        <div className="container">
          <h2 id="support-section">{t('home:back.title')}</h2>
          <div className="item-back-container">
            {data.map((e, index) => {
              const { img, url, title, is_break } = e;

              return (
                <a
                  href={url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className={title === 'Stakely' ? 'img-to-black' : ''}
                    src={img}
                    alt={title}
                  />
                </a>
              );
            })}
          </div>
          <h2 id="partners-section">{t('home:back.titleA')}</h2>
          <div className="item-back-container">
            {aPartners.map((e, index) => {
              return (
                <a
                  href={e.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={e.image} alt={e.url} />
                </a>
              );
            })}
          </div>
          <h2>{t('home:back.titleB')}</h2>
          <div className="item-back-container">
            {dataInfoAssSee.map((e, index) => {
              return (
                <a
                  href={e.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={e.image} alt={e.url} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeBacked;
