import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const dataInfo = [
  {
    img: "assets/images/icons/twitter.svg",
    link: "https://twitter.com/hoprnet",
  },
  {
    img: "assets/images/icons/telegram.svg",
    link: "https://t.me/hoprnet",
  },
  {
    img: "assets/images/icons/linkedin.svg",
    link: "https://www.linkedin.com/company/hoprnet",
  },
  {
    img: "assets/images/icons/github.svg",
    link: "https://github.com/hoprnet",
  },
  {
    img: "assets/images/icons/medium.svg",
    link: "https://medium.com/hoprnet",
  },
  {
    img: "assets/images/icons/youtube.svg",
    link: "https://www.youtube.com/channel/UC2DzUtC90LXdW7TfT3igasA",
  },
  {
    img: "assets/images/icons/discord.svg",
    link: "https://discord.gg/dEAWC4G",
  },
];

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
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
              &copy;{new Date().getFullYear()} {t("common:HORPAssociation")},{" "}
              {t("common:allRights")}
            </p>
          </div>
          <div className="footer-menu">
            <ul>
              <li>
                <Link href="/about-us">{t("common:contact")}</Link>
              </li>
              <li>
                <Link href="/about-us">{t("common:aboutUs")}</Link>
              </li>
              <li>
                <Link href="/about-us">{t("common:partners")}</Link>
              </li>
              <li>
                <Link href="/about-us">{t("common:support")}</Link>
              </li>
              <li>
                <Link href="/about-us">{t("common:FAQ")}</Link>
              </li>
              <li>
                <Link href="/about-us">{t("common:disclaimer")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
