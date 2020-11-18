import React, { useState, useEffect } from "react";
import Layout from "../../components/organisms/layout";

import HeroInternal from "../../components/organisms/hero-internal";

export default function Index() {
  return (
    <Layout>
      <HeroInternal
        title={"Enabling Data Privacy"}
        paragraphs={
          "Everything we do, we get tracked–often without even knowing it. And this data is then used to influence us and our decisions. We believe that everyone should have the chance to make their own decisions in their lives, as freely and uninfluenced as possible. HOPR has set out to protect your privacy, data, and ultimately, your identity"
        }
      />
      <section className="continue-hero-internal padding-section-aux">
        <div className="aux-container">
          <div>
          <h2>How? The HOPR Protocol</h2>
          </div>
          <div>
            <p>
              The HOPR protocol provides network-level and metadata privacy for
              every kind of data exchange. A mixnet protects the identity of
              both sender and recipient by routing data via multiple
              intermediate relay hops that mix traffic.
            </p>
            <p>
              Payments are handled via probabilistic micropayments, our custom
              layer-2 scaling solution on top of the Ethereum blockchain.
            </p>
            <p>
              Relay mix nodes are rewarded for their work in HOPR tokens. Our
              proof-of-relay mechanism protects everyone from dishonest
              behaviour.
            </p>
            <p>
              HOPR thus provides economic incentives to run a global privacy
              network sustainably - and at scale - without compromising privacy.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
