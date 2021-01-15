import React, { forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomeBacked = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const data = [
    {
      img: '/assets/backed_by_logo/Binance_labs.svg',
      url: 'https://binancelabs.substack.com/',
      title: 'Binance_labs',
      is_break: true,
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
  ];

  const dataInfoPartners = [
    'assets/partners/01_avado.svg',
    'assets/partners/02_froriep.svg',
    'assets/partners/03_elrond.svg',
    'assets/partners/04_sedimentum.svg',
    'assets/partners/05_swiss_medtech.svg',
    'assets/partners/06_dai_logo.svg',
    'assets/partners/07_health_tech_cluster.svg',
    'assets/partners/08_swiss_healthcare_startups.svg',
  ];

  const dataInfoAssSee = [
    'assets/as_see/coindesk.svg',
    'assets/as_see/cointelegraph.svg',
    'assets/as_see/moneytoday.svg',
  ];

  return (
    <>
      <section
        ref={ref}
        id="BACKED-BY"
        className="section-backed invert-color "
      >
        <div className="container">
          <h2>{t('home:back.title')}</h2>
          <div className="item-back-container">
            {data.map((e, index) => {
              const { img, url, title, is_break } = e;
              if (!is_break) {
                return (
                  <a
                    href={url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={img} alt={title} />
                  </a>
                );
              } else {
                return (
                  <div className="break-line" key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <img src={img} alt={title} />
                    </a>
                  </div>
                );
              }
            })}
          </div>
          <h2>{t('home:back.titleA')}</h2>
          <div className="item-back-container">
            {dataInfoPartners.map((e, index) => {
              return (
                <a
                  href="#"
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={e} alt={e} />
                </a>
              );
            })}
          </div>

          <h2>{t('home:back.titleB')}</h2>
          <div className="item-back-container">
            {dataInfoAssSee.map((e, index) => {
              return (
                <a
                  href="#"
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={e} alt={e} />
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
