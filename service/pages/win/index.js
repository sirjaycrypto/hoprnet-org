import React from 'react';

import HeroInternal from '../../components/organisms/hero-internal';
import Layout from '../../components/organisms/layout';
import HomeBacked from '../../components/sections/home-backed';
import { BannerGrid, SectionContainer, WinSchedules } from '../../components';
import { loadNamespaces } from '../_app';

export const Index = () => {
  return (
    <Layout>
      <div className="win-page">
        <section className="section-hero"></section>
        <SectionContainer>
          <h1 data-aos="fade-down" data-aos-delay="150">
            HOPR JUNGFRAU RELEASE
          </h1>
          <img src="assets/images/hopr_seal.png" alt="HOPR" width="175px" />
        </SectionContainer>
        <SectionContainer invert>
          <div className="wrapper-sales-for">
            <div className="card-view the-balancer">
              <h3 style={{ fontWeight: 'bold' }}>Balancer-Launch</h3>
              <div className="containerImg">
                <img src="/assets/images/HPR_Favicon.svg" alt="HOPR Logo" />
                <p>$ 0.30</p>
                <p className="label-remember">per HOPR</p>
              </div>
              <div className="btn-ticket" onClick={() => setShowModal(true)}>
                <span>Read more</span>
              </div>
            </div>

            <div className="the-char-balancer">
              <p>
                Filler text is text that shares some character-istics of a real
                written text, but is random or otherwise generated. It may be
                used to display a sample of fonts, generate text for testing, or
                to spoof an e-mail spam filter.
              </p>
            </div>
          </div>
        </SectionContainer>
        <SectionContainer extraClass="release">
          <div>
            <h2>HOPR JUNGFRAU RELEASE</h2>
            <p>
              Filler text is text that shares some character-istics of a real
              written text, but is random or otherwise generated. It may be used
              to display a sample of fonts, generate text for testing, or to
              spoof an e-mail spam filter.{' '}
            </p>
          </div>
        </SectionContainer>
        <BannerGrid />
        <SectionContainer extraClass="release">
          <div>
            <h2>ONLINE EVENT</h2>
            <p>
              Filler text is text that shares some characteristics of a real
              written text, but is random or otherwise generated. It may be used
              to display a sample of fonts, generate text for testing, or to
              spoof an e-mail spam filter. Filler text is text that shares some
              characteristics of a real written text, but is random or otherwise
              generated. WIN A TRIP TO SWITZERLAND by may be used to display a
              sample of fonts, generate text for testing, or to spoof an e-mail
              spam filter.{' '}
            </p>
          </div>
        </SectionContainer>
        <WinSchedules />
        <SectionContainer extraClass="terms">
          <p>
            TERMS AND CONDITIONS: Filler text is text that shares some
            characteristics of a real written text, but is random or otherwise
            generated. It may be used to display a sample of fonts, generate
            text for testing, or to spoof an e-mail spam filter. Filler text is
            text that shares some characteristics of a real written text, but is
            random or otherwise generated. Filler text is text that shares some
            characteristics of a real written text, but is random or otherwise
            generated. It may be used to display a sample of fonts, generate
            text for testing, or to spoof an e-mail spam filter. Filler text is
            text that shares some characteristics of a real written text, but is
            random or otherwise generated.{' '}
          </p>
        </SectionContainer>
        <HomeBacked />
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu', 'home'], locale),
    },
  };
}
