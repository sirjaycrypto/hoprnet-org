import React from 'react';
import Layout from '../components/organisms/layout';

export default function NotFound() {
  return (
    <Layout>
      <section className="section-notfound invert-color">
        <div className="container">
          <div class="section-inner">
            <div className="textContainer">
              404 Page not found <br />
              Whoops! (Or hop-la, as we say in Switzerland)
              <br />
              <br />
              Sorry about that.
              <br />
              You're most likely ahead of the curve and we're about to bring this page live very soon, but for now:
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
