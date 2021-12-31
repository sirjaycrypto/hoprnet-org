import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SectionHopOnBoard = () => {
  const { t } = useTranslation();

  const dataInfo = [
    {
      img: '/assets/images/hopr_Private.gif',
      title: t('home:hopOnBoard.sectionHopOnBoard.element1Title'),
      paragraph: t('home:hopOnBoard.sectionHopOnBoard.element1Paragraph'),
      mirrorBox: true,
    },
    {
      img: '/assets/images/hopr_Profitable.gif',
      title: t('home:hopOnBoard.sectionHopOnBoard.element2Title'),
      paragraph: t('home:hopOnBoard.sectionHopOnBoard.element2Paragraph'),
      mirrorBox: false,
    },
  ];

  return (
    <>
      <section className="section-hop-on-board">
        <div className="container">
          <div className="hop-on-board-information">
            <h2>{t('home:hopOnBoard.sectionHopOnBoard.title')}</h2>
            <p>{t('home:hopOnBoard.sectionHopOnBoard.description')}</p>
          </div>

          {dataInfo.map((x, i) => (
            <div
              key={i}
              className={`info-box-line ${x.mirrorBox ? 'flex-line' : ''}`}
            >
              <div className="info-cont aux-padding-box-read">
                <h3>{x.title}</h3>
                <p className="padding-bottom">{x.paragraph}</p>
              </div>
              <div>
                <img src={x.img} alt={x.title} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
export default SectionHopOnBoard;
