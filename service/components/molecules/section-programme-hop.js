import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SectionPorgrammeHop = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="section-programme-hop section-hop-on-board">
        <div className="container">
          <div className="programme-hop-information hop-on-board-information">
            <h2>{t('home:hopOnBoard.sectionProgramme.title')}</h2>
            <p>{t('home:hopOnBoard.sectionProgramme.description')}</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionPorgrammeHop;
