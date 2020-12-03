import React, { useState, useEffect } from "react";
import MenuMobile from "./menu-mobile";
import Link from "next/link";
import ItemsMenu from "../atoms/items-menu";
import ChooseLanguage from "./choose-language";
import { useRouter } from "next/router";

const sectionPage = [
  {
    id: "BACKED-BY",
    name:"BACKED BY",
    active: false,
  },
  {
    id: "FURTHER-READING",
    name:"FURTHER READING",
    active: false,
  },
  {
    id: "HOPR-NODE-ON-GITHUB",
    name:"HOPR NODE ON GITHUB",
    active: true,
  },
  {
    id: "HOW-DOES-IT-WORK",
    active: false,
    name:"HOW DOES IT WORK",
  },
  {
    id: "WHY-IT-MATTERS",
    name:"WHY IT MATTERS",
    active: false,
  },
  {
    id: "TOKEN-FEATURES",
    name:"TOKEN FEATURES",
    active: false,
  },
  {
    id: "TOKEN-RELEASE",
    name:"TOKEN RELEASE",
    active: false,
  },
];

export default function Navbar() {
  const [youDown, setYouDown] = useState(false);
  const [activaMenu, setActivaMenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setYouDown(false);
      } else {
        setYouDown(true);
        setActivaMenu(false);
      }
    };
  }, []);

  return (
    <>
      <nav className={youDown ? "add-scroll-menu " : ""}>
        <div className={"container-sm " + (activaMenu ? "add-shadow" : "")}>
          <div>
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
        <ChooseLanguage />
      </nav>

      <MenuMobile activaMenu={activaMenu} />
      {router.pathname === "/" ? (
        <div className={"section-indicator " + (youDown ? "make-visible" : "")}>
          <div className="helper-hr"></div>
          

          {sectionPage.map((e, index) => {
              const { active, name } = e;
              return (
              <h4> {active ? name : null}</h4>
              );
            })}
          <ul>
            {sectionPage.map((e, index) => {
              const { active } = e;
              return (
                <li key={index}>
                  <span className={(active ? "active" : "")}></span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </>
  );
}
