import React, { forwardRef } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const dataInfo = [
  {
    img: 'assets/images/icons/twitter.svg',
    link: 'https://twitter.com/hoprnet',
  },
  {
    img: 'assets/images/icons/telegram.svg',
    link: 'https://t.me/hoprnet',
  },
  {
    img: 'assets/images/icons/linkedin.svg',
    link: 'https://www.linkedin.com/company/hoprnet',
  },
  {
    img: 'assets/images/icons/github.svg',
    link: 'https://github.com/hoprnet',
  },
  {
    img: 'assets/images/icons/medium.svg',
    link: 'https://medium.com/hoprnet',
  },
  {
    img: 'assets/images/icons/youtube.svg',
    link: 'https://www.youtube.com/channel/UC2DzUtC90LXdW7TfT3igasA',
  },
  {
    img: 'assets/images/icons/discord.svg',
    link: 'https://discord.gg/dEAWC4G',
  },
];

const Footer = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();

  return (
    <>
      <footer ref={ref} id="FOOTER">
        <div className="container padding-section-aux">
          <div className="first-line-footer">
            <div className="footer-icon">
              <img
                src="/assets/icons/horp_icon.svg"
                alt="The HOPR-Token footer"
              />
            </div>
            <div className="footer-social">
              <ul className="list-reset">
                {dataInfo.map((e, index) => {
                  const { img, link } = e;
                  return (
                    <li key={index}>
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt="The HOPR-Token NOW" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="second-line-footer">
            <div>
              <p className="copy-footer">
                &copy;{new Date().getFullYear()} HOPR Association, all rights reserved
              </p>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <Link href="/about-us">Contact</Link>
                </li>
                <li>
                  <Link href="/about-us">About us</Link>
                </li>
                <li>
                  <Link href="/partners">Partners</Link>
                </li>
                <li>
                  <Link href="/about-us#jobs">Jobs</Link>
                </li>
                <li>
                  <Link href="/support">Support</Link>
                </li>
                <li>
                  <Link href="/disclaimer">Disclaimer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});

export default Footer;
