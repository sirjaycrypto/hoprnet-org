import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import RoadMapHop from '../molecules/road-map-hop';

const SectionRoadMapHop = () => {
  const { t } = useTranslation();

  const preparationData = [
    {
      title_1: 'Week 1',
      title_2: 'Get Your Tickets',
      title_3: 'Hop On Board Announcement',
      week : 1
    },
    {
      title_1: 'Week 2',
      title_2: 'All Aboard!',
      title_3: 'New Staking Program / DAO Fulfilment Plan',
      week : 2
    },
    {
      title_1: 'Week 3',
      title_2: `We're Off`,
      title_3: 'IP Privacy Week and HOPR Use Cases - First Showcase',
      week : 3
    },
  ];

  const journeyData = [
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element1Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element1Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element1Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element1Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element2Title1'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element2Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element2Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element3Title1'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element3Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element3Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element4Title1'),
      week: t('home:hopOnBoard.sectionRoadMap.element4Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element5Title1'),
      week: t('home:hopOnBoard.sectionRoadMap.element5Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element6Title1'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element6Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element6Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element7Title1'),
      week: t('home:hopOnBoard.sectionRoadMap.element7Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element8Title1'),
      title_2: t('home:hopOnBoard.sectionRoadMap.element8Title2'),
      title_3: t('home:hopOnBoard.sectionRoadMap.element8Title3'),
      week: t('home:hopOnBoard.sectionRoadMap.element8Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element9Title1'),
      week: t('home:hopOnBoard.sectionRoadMap.element9Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element10Title1'),
      week: t('home:hopOnBoard.sectionRoadMap.element10Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element11Title1'),
      week: t('home:hopOnBoard.sectionRoadMap.element11Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element12Title1'),
      week: t('home:hopOnBoard.sectionRoadMap.element12Week'),
    },
    {
      title_1: t('home:hopOnBoard.sectionRoadMap.element13Title1'),
      week: t('home:hopOnBoard.sectionRoadMap.element13Week'),
    },
  ];

  return (
    <>
      <section className="section-road-map-hop">
        <div className="container">
          <div className="road-map-information">
            <p>{t('home:hopOnBoard.sectionRoadMap.description')}</p>
            <h2>{t('home:hopOnBoard.sectionRoadMap.titlePreparation')}</h2>
          </div>

          <RoadMapHop className="road-map-hop-preparation" data={preparationData}/>

          <div className="road-map-information">
            <h2 className="title-journey">
              {t('home:hopOnBoard.sectionRoadMap.titleJourney')}
            </h2>
          </div>

          <RoadMapHop className="road-map-hop-journey" data={journeyData}/>
        </div>
      </section>
    </>
  );
};
export default SectionRoadMapHop;
