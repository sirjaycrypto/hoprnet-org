import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const dataInfoPartners = [
  { url: 'https://ava.do/', image: 'assets/partners/01_avado.svg' },
  { url: 'https://www.froriep.com/', image: 'assets/partners/02_froriep.svg' },
  { url: 'https://elrond.com/', image: 'assets/partners/03_elrond.svg' },
  { url: 'https://www.sedimentum.com/', image: 'assets/partners/04_sedimentum.svg' },
  { url: 'https://www.swiss-medtech.ch/', image: 'assets/partners/05_swiss_medtech.svg' },
  { url: 'https://www.xdaichain.com/', image: 'assets/partners/06_dai_logo.svg' },
  { url: 'https://healthtech.ch/', image: 'assets/partners/07_health_tech_cluster.svg' },
  { url: 'https://swisshealthcarestartups.com/', image: 'assets/partners/08_swiss_healthcare_startups.svg' },
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
            {dataInfoPartners.map((item, index) => {
              return (
                <li
                  key={index}
                  data-aos="fade-down"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.image} alt={item.url} />
                  </a>
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
