import React, { useState, useEffect } from "react";
import MenuMobile from "./menu-mobile";
import Link from "next/link";
import ItemsMenu from "../atoms/items-menu";
import ChooseLanguage from "./choose-language";
import { useRouter } from "next/router";
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
          <h4>Our Blog</h4>

          <ul>
            <li>
              <span></span>
            </li>
            <li>
              <span className="active"></span>
            </li>
            <li>
              <span></span>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
