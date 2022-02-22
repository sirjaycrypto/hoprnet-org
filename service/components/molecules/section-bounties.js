import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SectionBountiesHop = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="section-hop-on-board" id="bounties-hop-on-board">
        <div className="container">
          <div className="hop-on-board-information">
            <h1>{t('home:hopOnBoard.sectionBounties.mainTitle')}</h1>
            <p>{t('home:hopOnBoard.sectionBounties.paragraph1')}</p>
            <p>
              {t('home:hopOnBoard.sectionBounties.paragraph2')}{' '}
              <a href="https://medium.com/hoprnet/hopr-bounties-for-ethdenver-2022-804b5c3c7952">
                {t('home:hopOnBoard.sectionBounties.paragraph3')}
              </a>
            </p>
            <p>
              {t('home:hopOnBoard.sectionBounties.paragraph4')}{' '}
              <a href="https://gitcoin.co/hoprnet/active">
                {t('home:hopOnBoard.sectionBounties.paragraph5')}
              </a>
              {t('home:hopOnBoard.sectionBounties.paragraph6')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionBountiesHop;
