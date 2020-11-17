import React, { useEffect, useState } from "react";

export default function HomeTokenRelease() {
  return (
    <>
      <section className="section-token-release">
        <div className="aux-container">
          <div>
            <h2>TOKEN RELEASE</h2>
            <p>
              Lock HOPR tokens in your node to relay user data and cover
              traffic. The more you stake, the more data you can relay, and the
              more you earn. A quarter of all HOPR tokens are available only to
              stakers as a reward for relaying cover traffic.
            </p>
          </div>
          <div className="table-info">
            <div className="container-table">
              <div className="title">
                <h4>KEY METRICS</h4>
              </div>
              <div className="list-table">
                <ul>
                  <li>Token Name: HOPR Token</li>
                  <li>Token Symbol: HOPR</li>
                  <li>Network: Ethereum</li>
                  <li>Standards: ERC20, ERC777</li>
                  <li>Total supply: X HOPR</li>
                  <li>Initial circulating supply: X HOPR</li>
                  <li>Token price: X USD / HOPR</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h3>Token Allocation (%)</h3>
            <p>
              Lock HOPR tokens in your node to relay user data and cover
              traffic. The more you stake, the more data you can relay, and the
              more you earn. A quarter of all HOPR tokens are available only to
              stakers as a reward for relaying cover traffic.
            </p>
          </div>
          <div>
            <h3>Token Supply Distribution (%)</h3>
          </div>
        </div>
      </section>
    </>
  );
}
