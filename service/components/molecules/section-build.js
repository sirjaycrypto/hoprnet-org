import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const SectionBuildHop = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="section-hop-on-board" id="build-hop-on-board">
        <div className="container">
          <div className="hop-on-board-information">
            <h1>{t('home:hopOnBoard.sectionBuild.mainTitle')}</h1>
            <p>{t('home:hopOnBoard.sectionBuild.paragraph1')}</p>
            <h2>{t('home:hopOnBoard.sectionBuild.title1')}</h2>
            <h3>{t('home:hopOnBoard.sectionBuild.title2')}</h3>
            <p>
              {t('home:hopOnBoard.sectionBuild.paragraph2')}
              <a href="https://nodejs.org/en/download/" target="_blank">
                {t('home:hopOnBoard.sectionBuild.paragraph3')}
              </a>{' '}
              {t('home:hopOnBoard.sectionBuild.paragraph4')}{' '}
              <a href="https://yarnpkg.com/" target="_blank">
                {t('home:hopOnBoard.sectionBuild.paragraph5')}
              </a>{' '}
              {t('home:hopOnBoard.sectionBuild.paragraph6')}
            </p>
            <p>
              <code>
                {t('home:hopOnBoard.sectionBuild.code1')}
                <br />
                {t('home:hopOnBoard.sectionBuild.code2')}
                <br />
                {t('home:hopOnBoard.sectionBuild.code3')}
                <br />
                {t('home:hopOnBoard.sectionBuild.code4')}
              </code>
            </p>
            <h3>{t('home:hopOnBoard.sectionBuild.title3')}</h3>
            <p>
              <a
                href="https://gitpod.io/#https://github.com/hoprnet/hoprnet"
                target="_blank"
              >
                {t('home:hopOnBoard.sectionBuild.paragraph7')}
              </a>
            </p>
            <h2>{t('home:hopOnBoard.sectionBuild.title4')}</h2>
            <p>
              <code>{t('home:hopOnBoard.sectionBuild.code5')}</code>
            </p>
            <p>{t('home:hopOnBoard.sectionBuild.paragraph8')}</p>
            <h2>{t('home:hopOnBoard.sectionBuild.title5')}</h2>
            <p>
              {t('home:hopOnBoard.sectionBuild.paragraph9')}{' '}
              <a href="https://codesandbox.io/s/hopr-demo-react-hello-world-yo0uc?file=/src/App.tsx">
                {t('home:hopOnBoard.sectionBuild.paragraph10')}
              </a>
              {t('home:hopOnBoard.sectionBuild.paragraph11')}
              <a href="https://hoprnet.jobbase.io/">
                {t('home:hopOnBoard.sectionBuild.paragraph12')}
              </a>{' '}
              {t('home:hopOnBoard.sectionBuild.paragraph13')}{' '}
              <a href="http://localhost:13302/api/v2/_swagger">
                {t('home:hopOnBoard.sectionBuild.paragraph14')}
              </a>{' '}
              {t('home:hopOnBoard.sectionBuild.paragraph15')}
              <code>{t('home:hopOnBoard.sectionBuild.code6')}</code>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionBuildHop;
