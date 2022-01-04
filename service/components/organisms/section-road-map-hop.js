import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import RoadMapHop from '../molecules/road-map-hop';

const SectionRoadMapHop = () => {
  const { t } = useTranslation();

  const preparationData = [
    {
      title_2: t('home:hopOnBoard.sectionRoadMap.element1Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element1Title3'),
    },
    {
      title_2: t('home:hopOnBoard.sectionRoadMap.element2Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element2Title3'),
    },
  ];

  const journeyData = [
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element4Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element4Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element4Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element4Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element5Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element5Title2'),
      week: t('home:hopOnBoard.sectionRoadMap.element5Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element6Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element6Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element6Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element6Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element7Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element7Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element7Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element7Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element8Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element8Title2'),
      week: t('home:hopOnBoard.sectionRoadMap.element8Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element9Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element9Title2'),
      week: t('home:hopOnBoard.sectionRoadMap.element9Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element10Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element10Title2'),
      week: t('home:hopOnBoard.sectionRoadMap.element10Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element11Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element11Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element11Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element11Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element12Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element12Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element12Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element12Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element13Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element13Title2'),
      week: t('home:hopOnBoard.sectionRoadMap.element13Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element14Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element14Title2'),
      week: t('home:hopOnBoard.sectionRoadMap.element14Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element15Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element15Title2'),
      week: t('home:hopOnBoard.sectionRoadMap.element15Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element16Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element16Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element16Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element16Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element3Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element3Title2'),
      week: t('home:hopOnBoard.sectionRoadMap.element3Week'),
    },
  ];

  return (
    <>
      <section className="section-road-map-hop">
        <div className="container">
          <div className="road-map-information">
            <p>{t('home:hopOnBoard.sectionRoadMap.description')}</p>
            <h2>{t('home:hopOnBoard.sectionRoadMap.title1')}</h2>
          </div>

          <RoadMapHop className="road-map-hop-preparation" data={preparationData}/>

          <div className="road-map-information">
            <h2 className="title-journey">
              {t('home:hopOnBoard.sectionRoadMap.title2')}
            </h2>
          </div>

          <RoadMapHop className="road-map-hop-journey" data={journeyData}/>
        </div>
      </section>
    </>
  );
};
export default SectionRoadMapHop;
