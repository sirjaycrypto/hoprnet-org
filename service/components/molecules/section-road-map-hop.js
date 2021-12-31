import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SectionRoadMapHop = () => {
  const { t } = useTranslation();

  const data = [
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element1Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element1Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element1Title3'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element2Title1'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element2Title3'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element3Title1'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element3Title3'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element4Title1'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element5Title1'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element6Title1'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element6Title3'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element7Title1'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element8Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element8Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element8Title3'),
    },
  ];
  
  return (
    <>
      <section className="section-road-map-hop">
        <div className="container">
          <div className="road-map-information">
            <p>{t('home:hopOnBoard.sectionRoadMap.description')}</p>
          </div>

          <div className="road-map-hop">
            {data.map((x, i) => (
              <div className="road-map-element" key={i}>
                <div className="road-map-titles-left">
                  <div>
                    <span>{x.title_1}</span>
                  </div>
                  <div>
                    <span>{x.title_2}</span>
                  </div>
                </div>
                <div className="line-help">
                  <span></span>
                </div>
                <div className="area-info">
                  <h4>{x.title_3}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionRoadMapHop;
