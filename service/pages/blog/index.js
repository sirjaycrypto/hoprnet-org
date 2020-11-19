import React, { useState, useEffect } from "react";
import Layout from "../../components/organisms/layout";

import HeroInternal from "../../components/organisms/hero-internal";

export default function Index() {
  return (
    <Layout>
      <HeroInternal>
        <div>
          <h1>Join The HOPR Community</h1>
        </div>
      </HeroInternal>
      <section className="continue-hero-internal padding-section-aux">
        <div className="container">
          <div>
            <h2>Governance</h2>
          </div>
          <div className="container-block">
            <div className="block-left">
              <p>
                At HOPR we're building the foundations for a more private and
                resilient web. But to succeed, we also need to challenge the
                economic power structures that shackle today's web to unhealthy
                and unsustainable business models.
              </p>
              <p>
                We need natively digital organizations to drive the next wave of
                inclusive innovation. Open technology platforms rely on and
                enable communities instead of emperors and shareholders.
              </p>
            </div>
            <div className="block-right">
              <p>
                The recent movement of Decentralized Autonomous Organizations
                (DAOs), provides participatory governance and economies for the
                blockchain era. However, DAOs cannot reach their full potential
                until they can co-exist with existing legal frameworks.
              </p>
              <p>
                HOPR is pioneering decentralized, community-enabling governance
                (DecenGov) as a techno-legal framework that combines the
                dynamics of communities with the efficiencies of crypto networks
                and the advantages of established legal bodies to govern
                collective efforts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
