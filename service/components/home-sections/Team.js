import React from 'react';

export default function Team() {
  return (
    <div className="section-team container the-aux-margin">
      <div className="container">
        <div>
          <h3>Team</h3>
        </div>
        <a href="/about-us#team-section">
          <img
            data-aos="fade-down"
            src="assets/icons/cards/team-card-with-blue-stroke.png"
            alt="Team"
          />
        </a>
      </div>
      <div>
        <p>
          HOPR is a digital commons built by and for an open community that has
          no single owner or single point of failure. At the same time, delivery
          of complex software projects needs commitment and accountability.
          <br />
          Therefore, the HOPR Association provided a first grant to the HOPR
          Services AG to develop and support a first version of the HOPR
          protocol in Typescript to bootstrap the ecosystem.
        </p>
      </div>
    </div>
  );
}
