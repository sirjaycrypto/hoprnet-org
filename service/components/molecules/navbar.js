import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [youDown, setYouDown] = useState(false);
  const [activaMenu, setactivaMenu] = useState(false)

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setYouDown(false);
      } else {
        setYouDown(true);
      }
    };
  }, []);
  return (
    <nav className={youDown ? "add-scroll-menu" : ""}>
      <div className="aux-container">
        <div>
          <Link href="/">
            <img
              className="logo-nav"
              src="/assets/brand/logo.svg"
              alt="hopr logo"
            />
          </Link>
        </div>
        <div className={'icon-menu ' + (activaMenu ? 'open' : '')} onClick={() => setactivaMenu(!activaMenu)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        <div className="menu-desktop">
          <Link href="/about-us">About us</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/token">Token</Link>
          <Link href="/join-testnet">Join testnet</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  );
}
