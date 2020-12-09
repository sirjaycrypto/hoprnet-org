import React, { useState, useEffect } from "react";
import MenuMobile from "./menu-mobile";
import Link from "next/link";
import ItemsMenu from "../atoms/items-menu";
import useTranslation from "next-translate/useTranslation";
import { css, keyframes } from "@emotion/css";
import { useRouter } from "next/router";

const sectionPage = [
  {
    id: "WHY-IT-MATTERS",
    name: "WHY IT MATTERS",
  },
  {
    id: "HOW-DOES-IT-WORK",
    name: "HOW DOES IT WORK",
  },
  {
    id: "TOKEN-FEATURES",
    name: "TOKEN FEATURES",
  },
  {
    id: "HOPR-NODE-ON-GITHUB",
    name: "HOPR NODE ON GITHUB",
  },

  {
    id: "TOKEN-RELEASE",
    name: "TOKEN RELEASE",
  },
  {
    id: "BACKED-BY",
    name: "BACKED BY",
  },
  {
    id: "FURTHER-READING",
    name: "FURTHER READING",
  },
];

export default function Navbar({ visibleNow, isVisibleBanner }) {
  const [fontSize, setFontSize] = useState(34);
  const [bottomPX, setBottomPX] = useState(10);
  const [youDown, setYouDown] = useState(false);
  const [activaMenu, setActivaMenu] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setYouDown(false);
        setFontSize(34);
      } else {
        setFontSize(14);
        setYouDown(true);
        setActivaMenu(false);
      }
    };
    if (isVisibleBanner) {
      setFontSize(34);
      setBottomPX(30)
    } else {
      setFontSize(14);
      setBottomPX(10)
    }
  }, [fontSize, youDown, isVisibleBanner]);

  const clickBtn = () => {
    console.log("Click");
  };

  const animate = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}

`;

  return (
    <>
      <nav className={youDown ? "add-scroll-menu " : ""}>
        <div className={"container-sm " + (activaMenu ? "add-shadow" : "")}>
          <div className="help-flex">
            <Link href="/">
              <img
                className="logo-nav"
                src="/assets/brand/logo.svg"
                alt="hopr logo"
              />
            </Link>
          </div>
          <div
            className={"icon-menu " + (activaMenu ? "open" : "")}
            onClick={() => setActivaMenu(!activaMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ItemsMenu />
        </div>
      </nav>

      <MenuMobile activaMenu={activaMenu} />
      {router.pathname === "/" && visibleNow ? (
        <div className={"section-indicator " + (youDown ? "make-visible" : "")}>
          <div className="helper-hr"></div>

          {sectionPage.map((e, index) => {
            const { name } = e;
            return <h4 key={index}> {e.id == visibleNow ? name : null}</h4>;
          })}
          <ul>
            {sectionPage.map((e, index) => {
              return (
                <li key={index}>
                  <span className={e.id == visibleNow ? "active" : ""}></span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          width: 100%;
          position: fixed;
          transition: all 600ms ease-in-out;
          bottom: ${bottomPX}px;
        `}
      >
        <div
          onClick={() => clickBtn()}
          className={css`
            background: linear-gradient(90deg, #0000db 0%, #292941 100%);
            transition: all 600ms ease-in-out;
            padding: 0em 1.5em;
            border-radius: 100px;
            width: fit-content;
            &:hover {
              animation: ${animate} ease 1s forwards;
            }
          `}
        >
          <span
            className={css`
              font-size: ${fontSize}px;
              transition: all 300ms ease-in-out;
              font-weight: 600;
              line-height: 2em;
              display: flex;
              align-items: center;
              text-align: center;
              letter-spacing: 0.2975px;
              color: #ffffff;
              margin: 0;
              padding: 0;

              @media screen and (max-width: 600px) {
                font-size: 14px;
              }
            `}
          >
            {t("common:btn-token")}
          </span>
        </div>
      </div>
    </>
  );
}
