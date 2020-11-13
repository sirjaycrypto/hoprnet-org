import React, { useEffect, useState } from "react";

export default function HomeHardware() {
    
  return (
    <>
      <section className="section-hopr-github">
        <div className="aux-container">
          <div className="flex-line-row">
            <div>
              <h2>HOPR-NODE ON GITHUB</h2>
              <p>
                Anyone can run a HOPR node on their own hardware! We provide
                easy-to-install software for Linux, macOS, Windows, Docker and
                Cloud Environments. Furthermore we also sell an dedicated
                hardware not for faster staking.More at the End of the Page.
              </p>
            </div>

            <div>
              <img
                src="/assets/images/hardhaer.png"
                alt="The HOPR-Token"
                className="aux-img-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
