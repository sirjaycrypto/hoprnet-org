import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const data = [
  {
    link:
      'https://www.coindesk.com/binance-labs-leads-1m-seed-round-in-crypto-tor-alternative-hopr',
    img: '/assets/images/icons/with-blue-stroke/cloud-data-transfer.png',
    title: 'Connect devices and clouds',
    main: ` <ol>
   <li>
     Exchange health data between
     <a href="https://www.sedimentum.com/" target="_blank" rel="noopener noreferrer">
       <span className="text-color-high underline">hospitals and off-site computing centers</span>
     </a>
     , compliant with data privacy regulations (GDPR, HIPAA, CCPA)
   </li>
   <li>Connect IoT devices to the cloud without revealing the device’s owner or location</li>
   <li>
     Securely process data via
     <a
       href="https://www.media.mit.edu/projects/distributed-learning-and-collaborative-learning-1/overview/"
       target="_blank"
       rel="noopener noreferrer"
     >
       <span className="text-color-high underline">split learning</span>
     </a>
     for distributed machine learning
   </li>
 </ol>`,
    delayTime: '100',
  },
  {
    link:
      'https://cointelegraph.com/news/hopr-data-privacy-testnet-to-launch-following-investment-by-binance',
    img: '/assets/images/icons/with-blue-stroke/iris-scan-lock.png',
    title: 'Make crypto assets private',
    main: ` <ol>
    <li>
      Complement
      <a href="https://tornado.cash/" target="_blank" rel="noopener noreferrer">
        <span className="text-color-high underline">on-chain privacy</span>
      </a>
      with HOPR's network-level privacy for truly confidential transactions
    </li>
    <li>
      Create trustless and privacy-first
      <a href="http://biconomy.io/" target="_blank" rel="noopener noreferrer">
        <span className="text-color-high underline">layer-2 scaling solutions</span>
      </a>
    </li>
    <li>
      Facilitate the exchange of
      <a href="https://openvasp.org/" target="_blank" rel="noopener noreferrer">
        <span className="text-color-high underline">confidential financial data</span>
      </a>
      between regulated institutions
    </li>
  </ol>`,
    delayTime: '150',
  },
  {
    link:
      'https://www.moneytoday.ch/news/das-schweizer-tech-startup-hopr-sammelt-1-million-dollar-ein-binance-labs-fuehrt-die-investitionsru/',
    img: '/assets/images/icons/with-blue-stroke/hierarchy-8.png',
    title: 'Digitalization without privacy concerns',
    main: ` <ol>
   <li>Securely access private documents</li>
   <li>
     <a href="https://matrix.org/" target="_blank" rel="noopener noreferrer">
       <span className="text-color-high underline">Chat in private</span>
     </a>
     , so not even the provider knows who you’re talking to
   </li>
   <li>
     <a href="https://www.sherpany.com/en/" target="_blank" rel="noopener noreferrer">
       <span className="text-color-high underline">Manage your organization</span>
     </a>
     securely from anywhere, including your home office
   </li>
 </ol>`,
    delayTime: '200',
  },
];

export default function UseCases() {
  const { t } = useTranslation();
  return (
    <section className="section-UseCases change-bg-color the-aux-padding">
      <div className="container">
        <div data-aos="fade-up">
          <div className="container-sm sub-title">
            <h2>Use Cases</h2>
          </div>
          <div className="read-text">
            <p>
              Your data, your decision.
              <br />
              <br />
              HOPR keeps any exchange of data private.
              <br />
              The{' '}
              <a href="/layer0-data-privacy#how">
                <span className="text-color-high underline">HOPR protocol</span>
              </a>
              is a layer-0 privacy foundation for anyone to{' '}
              <a
                href="https://www.coindesk.com/dont-hodl-buidl-blockchain-tech-will-add-value-2018"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <span className="text-color-high underline">build</span>
              </a>{' '}
              on.
            </p>
            <p>
              Standard end-to-end encryption does not provide sufficient
              privacy.
              <br />
              It leaks important metadata, such as who is exchanging data, when,
              and how often. Securing network-level privacy with HOPR unlocks a
              range of opportunities such as:
            </p>
          </div>
        </div>

        <div className="items-list">
          {data.map((e, index) => {
            const { title, main, img, about, delayTime } = e;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={delayTime}
                className="element-item"
              >
                <div className="main">
                  <div className="container-img mb-12">
                    <img src={img} alt={about} />
                  </div>

                  <div>
                    <h4>{title}</h4>
                    <div
                      className="list-text"
                      dangerouslySetInnerHTML={{
                        __html: main,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
