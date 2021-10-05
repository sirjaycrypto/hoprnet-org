import React, { forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomeRoadMap = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const data = [
    {
      date: t('home:roadMap.item1Date'),
      title: t('home:roadMap.item1Title'),
      about: t('home:roadMap.item1Description'),
      links: [
        {
          link: 'https://hoprnet.org/book-of-hopr',
          text: t('home:roadMap.item1L1'),
        },
        {
          link: '#',
          text: t('home:roadMap.item1L2'),
        },
      ],
    },
    {
      date: t('home:roadMap.item2Date'),
      title: t('home:roadMap.item2Title'),
      about: t('home:roadMap.item2Description'),
      links: [
        {
          link: '#',
          text: t('home:roadMap.item2L1'),
        },
      ],
    },
    {
      date: t('home:roadMap.item3Date'),
      title: t('home:roadMap.item3Title'),
      about: t('home:roadMap.item3Description'),
      links: [
        {
          link: 'https://ava.do/checkout/hopr',
          text: t('home:roadMap.item3L1'),
        },
        {
          link: 'https://github.com/hoprnet',
          text: t('home:roadMap.item3L2'),
        },
      ],
    },
    {
      date: t('home:roadMap.item4Date'),
      title: t('home:roadMap.item4Title'),
      about: t('home:roadMap.item4Description'),
      links: [
        {
          link: 'https://medium.com/hoprnet/hopr-introduces-first-proof-of-relay-data-privacy-mechanism-to-run-on-matic-d45bb5624e5b',
          text: t('home:roadMap.item4L1'),
        },
        {
          link: 'https://www.xdaichain.com/',
          text: t('home:roadMap.item4L2'),
        },
        {
          link: 'https://www.binance.org/en/smartChain',
          text: t('home:roadMap.item4L3'),
        },
      ],
    },
    {
      date: t('home:roadMap.item5Date'),
      title: t('home:roadMap.item5Title'),
      about: t('home:roadMap.item5Description'),
    },
    {
      date: t('home:roadMap.item7Date'),
      title: t('home:roadMap.item7Title'),
      about: t('home:roadMap.item7Description'),
    },
    {
      date: t('home:roadMap.item9Date'),
      title: t('home:roadMap.item9Title'),
      about: t('home:roadMap.item9Description'),
    },
    {
      date: t('home:roadMap.item10Date'),
      title: t('home:roadMap.item10Title'),
      about: t('home:roadMap.item10Description'),
    },
    {
      date: t('home:roadMap.item6Date'),
      title: t('home:roadMap.item6Title'),
      about: t('home:roadMap.item6Description'),
    },
    {
      date: t('home:roadMap.item8Date'),
      title: t('home:roadMap.item8Title'),
      about: t('home:roadMap.item8Description'),
    },
    
  ];

  return (
    <>
      <section ref={ref} id="roadMap" className="section-roadMap">
        <h2>{t('home:roadMap.title')}</h2>
        <div className="container">
          {data.map((e, index) => {
            const { date, title, about, links } = e;

            return (
              <div key={index} className="road-map-element">
                <div>
                  <p className="styleDate">{date}</p>
                </div>
                <div className="line-help">
                  <span></span>
                </div>
                <div className="area-info">
                  <h4>{title}</h4>
                  <p className="style-about">{about}</p>
                  {links && (
                    <div className="links-exp">
                      {'('}
                      {links.map((item, i) => {
                        return (
                          <span key={index + '-' + i}>
                            <a href={item.link}>{item.text}</a>
                            {i < links.length - 1 ? ', ' : ''}
                          </span>
                        );
                      })}
                      {')'}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
});

export default HomeRoadMap;
