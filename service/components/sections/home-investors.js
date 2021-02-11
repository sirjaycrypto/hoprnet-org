import React, { forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomeInvestors = forwardRef(({ title }, ref) => {
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

  return (
    <>
      <section
        ref={ref}
        id="BACKED-BY"
        className="continue-yellow"
      >
        <div className="container">
          <h2 id="noUppercase">{t('common:investors')}</h2>
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
                    <img className="img-to-black" src={img} alt={title} />
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
        </div>
      </section>
    </>
  );
});

export default HomeInvestors;
