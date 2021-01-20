import React from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function HoperIs() {
  const { t } = useTranslation();
  const dataTop = [
    {
      title: 'Enabling Data Privacy',
      img: 'assets/icons/with-blue-stroke/common-file-lock.png',
      main: ` We're building the HOPR network to give people and companies control over their level of data
      privacy.`,
      delayTime: '100',
    },
    {
      title: 'Open Source Support',
      img: 'assets/icons/with-blue-stroke/user-signal.png',
      main:
        '  The HOPR community fights for the digital privacy of the future. Everybody can become a part of our movement.',
      delayTime: '150',
    },
  ];

  const dataBottom = [
    {
      forClient: 'Personal',
      title: 'Hackathons + Community',
      img: 'assets/icons/with-blue-stroke/love-heart-keyhole.png',
      main: `From testnet game sessions to reward bounties, join our
      <a
        href="https://t.me/hoprnet"
        target="_blank"
        rel="noopener noreferrer"
        className="text-color-high underline"
      >
        Telegram
      </a> ${'   '}
      to become part of our growing community.
      <br />`,
      delayTime: '200',
    },
    {
      forClient: 'Professional',
      title: 'Your company',
      img: 'assets/icons/with-blue-stroke/building-modern.png',
      main: ` HOPR is providing worry-free privacy to everyone.${' '}
      <a
        href="/partners"
        target="_blank"
        rel="noopener noreferrer"
        className="text-color-high underline"
      >
        Reach out to us
      </a> ${' '}
      if you and your customers deserve the best.`,
      delayTime: '250',
    },
  ];

  return (
    <section className="section-UseCases change-bg-color the-aux-padding invert-color">
      <div className="container">
        <div
          className="container-sm sub-title"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
        >
          <h2>HOPR Is</h2>
        </div>

        <div className="items-list list-two-elements">
          {dataTop.map((e, index) => {
            const { title, main, img, about, delayTime } = e;
            return (
              <div
                key={index}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
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

        <div className="container sub-title">
          <h2>We Want You To Grow</h2>
        </div>

        <div className="items-list list-two-elements">
          {dataBottom.map((e, index) => {
            const { forClient, title, main, img, delayTime } = e;
            return (
              <div
                key={index}
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay={delayTime}
                className="element-item"
              >
                <div className="main">
                  <p>{forClient}</p>
                  <div className="container-img mb-12">
                    <img src={img} alt={title} />
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
