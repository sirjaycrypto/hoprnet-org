import React, { useRef, useEffect } from 'react';

import useTranslation from 'next-translate/useTranslation';

const dataInfo = [
  'assets/partners/01_avado.svg',
  'assets/partners/02_froriep.svg',
  'assets/partners/03_elrond.svg',
  'assets/partners/04_sedimentum.svg',
  'assets/partners/05_swiss_medtech.svg',
  'assets/partners/06_dai_logo.svg',
  'assets/partners/07_health_tech_cluster.svg',
  'assets/partners/08_swiss_healthcare_startups.svg',
];

export default function Partners() {
  const { t } = useTranslation();
  return (
    <section className="section-partners change-bg-color invert-color">
      <div className="container">
        <div className="container-sm sub-title">
          <h2>Partners</h2>
        </div>
        <div className="container">
          <ul>
            {dataInfo.map((item, index) => {
              return (
                <li
                  key={index}
                  data-aos="fade-down"
                >
                  <img src={item} alt="The HOPR-Token NOW" />
                </li>
              );
            })}
          </ul>
          <div className="btn-align">
            <div className="type-btn">
              <span>Want to become our partner?</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
