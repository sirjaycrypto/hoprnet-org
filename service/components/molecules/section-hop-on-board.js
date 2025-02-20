import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SectionHopOnBoard = () => {
  const { t } = useTranslation();

  const dataInfo = [
    {
      img: '/assets/images/gif_1_hop_on_board.gif',
      paragraph: t('home:hopOnBoard.sectionHopOnBoard.element1Paragraph'),
      mirrorBox: true,
    },
    {
      img: '/assets/images/gif_2_hop_on_board.gif.gif',
      paragraph: t('home:hopOnBoard.sectionHopOnBoard.element2Paragraph'),
      mirrorBox: false,
    },
  ];

  return (
    <>
      <section className="gif-content section-hop-on-board">
        <div className="container">
          <div className="hop-on-board-information">
            <h1>{t('home:hopOnBoard.sectionHopOnBoard.title')}</h1>
            <p>{t('home:hopOnBoard.sectionHopOnBoard.description1')}</p>
            <p className="padding-bottom-description2">
              {t('home:hopOnBoard.sectionHopOnBoard.description2')}
            </p>
          </div>

          {dataInfo.map((x, i) => (
            <div
              key={i}
              className={`info-box-line ${x.mirrorBox ? 'flex-line' : ''}`}
            >
              <div className="info-cont aux-padding-box-read">
                <p className="padding-bottom">{x.paragraph}</p>
              </div>
              <div>
                <img src={x.img} alt={x.title} />
              </div>
            </div>
          ))}

          <div className="hop-on-board-information">
            <p className="paragraph-hop-on-board">
              You can join the journey at any time, but the rewards are higher
              for those who get on board early…
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionHopOnBoard;
