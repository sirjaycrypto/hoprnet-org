import React, { useEffect, useState } from 'react'

export default function HomeTokenFeatures() {
  return (
    <>
      <section className="section-token-fea">
        <div className="aux-container">
          <div className="container-center-center">
            <h2>TOKEN FEATURES</h2>
          </div>
          {/*  */}
          <div className="element-boxing">
            <div className="item">
              <div>
                <h4>Pay</h4>
                <p>
                  Spend HOPR tokens to send data through the HOPR network with complete data and metadata privacy. Spent
                  HOPR tokens are paid to the node runners who relay the data as it hops through the network.
                </p>
              </div>
            </div>
            <div className="item">
              <div>
                <h4>Stake</h4>
                <p>
                Lock HOPR tokens in your node to relay user data and cover traffic. The more you stake, the more data you can relay, and the more you earn. A quarter of all HOPR tokens are available only to stake's as a reward for relaying cover traffic.
                </p>
              </div>
            </div>
            <div className="item">
              <div>
                <h4>Vote</h4>
                <p>
                Participate in decentralized, community-enabling governance decisions to shape the future of HOPR, from technical parameters to the composition of the HOPR Association’s board of directors. 
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
    </>
  )
}
