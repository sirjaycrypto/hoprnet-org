import React from 'react';

import HeroInternal from '../../components/organisms/hero-internal';
import Layout from '../../components/organisms/layout';
import { BannerItem, SectionContainer } from '../../components';
import { loadNamespaces } from '../_app';

export const Index = () => {
  return (
    <Layout>
      <div className="win-page">
        <HeroInternal>
        </HeroInternal>
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
        <SectionContainer extraClass="banners">
          <div className="banner-row">
            <BannerItem
              alt="Banner 1"
              blindText="Permanent Blindtext-overlay via Html"
              height="273.88px"
              src="/assets/images/win/win-banner-1.png"
              width="468px"
            />
            <BannerItem
              alt="Banner 2"
              blindText="Permanent Blindtext-overlay via Html"
              height="273.88px"
              src="/assets/images/win/win-banner-2.png"
              width="468px"
            />
            <BannerItem
              alt="Banner 3"
              blindText="Permanent Blindtext-overlay via Html"
              height="273.88px"
              src="/assets/images/win/win-banner-3.png"
              width="468px"
            />
            <BannerItem
              alt="Banner 4"
              blindText="Permanent Blindtext-overlay via Html"
              height="273.88px"
              src="/assets/images/win/win-banner-4.png"
              width="468px"
            />
            <BannerItem
              alt="Banner 5"
              blindText="Permanent Blindtext-overlay via Html"
              height="273.88px"
              src="/assets/images/win/win-banner-5.png"
              width="468px"
            />
            <BannerItem
              alt="Banner 6"
              blindText="Permanent Blindtext-overlay via Html"
              height="273.88px"
              src="/assets/images/win/win-banner-6.png"
              width="468px"
            />
            <BannerItem
              alt="Banner 7"
              blindText="Permanent Blindtext-overlay via Html"
              height="273.88px"
              src="/assets/images/win/win-banner-7.png"
              width="468px"
            />
            <BannerItem
              alt="Banner 8"
              blindText="Permanent Blindtext-overlay via Html"
              height="273.88px"
              src="/assets/images/win/win-banner-8.png"
              width="468px"
            />
          </div>
        </SectionContainer>
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
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu'], locale),
    },
  };
}
