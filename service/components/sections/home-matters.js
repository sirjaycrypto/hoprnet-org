import React, { useEffect, useState } from "react";

export default function HomeMatter() {
  return (
    <>
      <section className="section-why-matters padding-section-aux invert-color ">
        <div className="container">
          <h2>WHY IT MATTERS…</h2>
          <div className="container-video">
            <video controls>
              <source src="/assets/video/matters.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <p className="link-out">Source: Cisco Visual Networking Index</p>
          </div>
          <p>
            "Millions of Gigabytes are transmitted across the globe every
            minute. The global internet bandwidth is still growing exponentially
            due to new technologies such as 5G. A lot of this massive amount of
            data is confidentially transmitted by people or corporations that
            need protection. The HOPR protocol brings metadata privacy on the
            network level for all of them. The HOPR network is driven by the
            HOPR token."
          </p>
          <div className="container-center-center">
            <div className="type-btn">
              <span>Get HOPR-Token on SECRET</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
