import React from 'react';
import PropTypes from 'prop-types';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '../atoms/button';

export const aPartners = [
  { url: 'https://ava.do/', image: 'assets/partners/01_avado.svg' },
  { url: 'https://www.froriep.com/', image: 'assets/partners/02_froriep.svg' },
  { url: 'https://elrond.com/', image: 'assets/partners/03_elrond.svg' },
  {
    url: 'https://www.sedimentum.com/',
    image: 'assets/partners/04_sedimentum.svg',
  },
  {
    url: 'https://www.swiss-medtech.ch/',
    image: 'assets/partners/05_swiss_medtech.svg',
  },
  {
    url: 'https://www.xdaichain.com/',
    image: 'assets/partners/06_dai_logo.svg',
  },
  {
    url: 'https://healthtech.ch/',
    image: 'assets/partners/07_health_tech_cluster.svg',
  },
  {
    url: 'https://swisshealthcarestartups.com/',
    image: 'assets/partners/08_swiss_healthcare_startups.svg',
  },
  {
    image: 'assets/partners/09_swissmade_software_logo.png',
    url: 'https://www.swissmadesoftware.org',
  },
  { url: 'https://blockark.io/', image: 'assets/partners/BLOCKARK-LOGO.png' },
  { image: 'assets/partners/Rockstar_Recruiting.png', url: 'https://www.rockstarjobs.ch/' },
];

export default function Partners({ invert = false }) {
  const { t } = useTranslation();
  return (
    <section className={`section-partners padding-section-aux${invert ? ' change-bg-color invert-color': ''}`}>
      <div className="container">
        <h2 data-aos="fade-zoom-in" data-aos-easing="ease-in-back">
          {t('about:partners.title')}
        </h2>
        <div className="container-sm">
          <ul>
            {aPartners.map(({ image, url }, index) => {
              return (
                <li
                  key={`p-${index}`}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                >
                  {url ? (
                    <a href={url} alt="Partners HOPR">
                      <img src={image} alt="The HOPR-Token NOW" />
                    </a>
                  ) : (
                    <img src={image} alt="The HOPR-Token NOW" />
                  )}
                </li>
              );
            })}
          </ul>
          <div className="btn-align">
            <Button
              className="type-btn"
              content={t('about:partners.btnLabel')}
              to="partners"
              type="link"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

Partners.propTypes = {
  invert: PropTypes.bool,
};
