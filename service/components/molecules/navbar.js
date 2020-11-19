import React, { useState, useEffect } from "react";
import MenuMobile from "./menu-mobile";
import Link from "next/link";
import ItemsMenu from "../atoms/items-menu";

export default function Navbar() {
  const [youDown, setYouDown] = useState(false);
  const [activaMenu, setActivaMenu] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setYouDown(false);
      } else {
        setYouDown(true);
        setActivaMenu(false)
      }
    };
  }, []);
  return (
    <>
      <nav className={youDown ? "add-scroll-menu " : ""}>
        <div className={"container " + (activaMenu ? "add-shadow" : "")} >
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

          <div className="menu-desktop">
           <ItemsMenu/>
          </div>
        </div>
      </nav>
      <MenuMobile activaMenu={activaMenu}/>
    </>
  );
}
