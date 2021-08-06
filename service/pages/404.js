import React from 'react';
import Layout from '../components/organisms/layout';

export default function NotFound() {
  return (
    <Layout>
      <section className="section-notfound invert-color">
        <div className="container">
          <div className="section-inner">
            <div className="textContainer">
              Whoops! (Or hop-la, as we say in Switzerland)
              <br />
              <br />
              Sorry, that page does not exist.
              <br />
              <br />
              Let's get you back to our main page:
              <br />
              <a href="/" className="text-color-high underline">
                www.HOPRnet.org
              </a>
            </div>
            <div className="circleContainer">
              <div className="circle" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
