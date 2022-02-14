import React from 'react';
import { useTranslation } from '../../hooks/translation';
import Jobs from './jobs';

const SectionJobsHopOnBoard = () => {
  const { t } = useTranslation();
  return (
    <section className="section-hop-on-board" id="jobs-hop-on-board">
      <div className="container">
        <div className="jobs">
          <h1>JOBS</h1>
          <p>We’re currenly looking for the following positions</p>
          <Jobs />
        </div>
      </div>
    </section>
  );
};

export default SectionJobsHopOnBoard;
