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

export default function Navbar({ visibleNow }) {
  const [youDown, setYouDown] = useState(false);
  const [activaMenu, setActivaMenu] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setYouDown(false);
      } else {
        setYouDown(true);
        setActivaMenu(false);
      }
    };
  }, [ youDown]);

  return (
    <>
      <nav id="menu" className={youDown ? "add-scroll-menu " : ""}>
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
          <div className={"icon-menu " + (activaMenu ? "open" : "")}>
            <input
              type="checkbox"
              id="toggle"
              onClick={() => setActivaMenu(!activaMenu)}
            />
            <label htmlFor="toggle"></label>
          </div>

          <ItemsMenu />
        </div>
      </nav>

      <MenuMobile activaMenu={activaMenu} />
      {router.pathname === "/" ? (
        <div className={"section-indicator " + (youDown ? "make-visible" : "")}>
          <div className="helper-hr"></div>

          {/* {sectionPage.map((e, index) => {
            const { name } = e;
            return <h4 key={index}> {e.id == visibleNow ? name : null}</h4>;
          })} */}
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
    </>
  );
}
