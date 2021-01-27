import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInDown } from '../../util/motionConfig';
import MenuMobile from './menu-mobile';
import Link from 'next/link';
import ItemsMenu from '../atoms/items-menu';

import { useRouter } from 'next/router';

export default function Navbar({ visibleNow }) {
  const [youDown, setYouDown] = useState(false);
  const [addStyle, setAddStyle] = useState(false);
  const [activaMenu, setActivaMenu] = useState(false);
  const router = useRouter();

  function isTheToken() {
    return router.pathname === '/token';
  }

  useEffect(() => {
    isTheToken();
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setYouDown(false);
      } else {
        window.toggle.checked = false;
        setYouDown(true);
        setActivaMenu(false);
        if (isTheToken()) {
          setYouDown(false);
        }
      }
    };
  }, [youDown, isTheToken]);

  return (
    <>
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <motion.nav
          variants={fadeInDown}
          id="menu"
          className={
            (youDown && 'add-scroll-menu ') ||
            (addStyle ? 'specialNav ' : 'nav-style-no-home')
          }
          transition={{ delay: 0.8 }}
        >
          <div className={'container-sm ' + (activaMenu ? 'add-shadow' : '')}>
            <div className="help-flex">
              <Link href="/">
                <img
                  className="logo-nav"
                  src="/assets/brand/logo.svg"
                  alt="hopr logo"
                />
              </Link>
            </div>
            <div className={'icon-menu ' + (activaMenu ? 'open' : '')}>
              <input
                type="checkbox"
                id="toggle"
                onClick={() => setActivaMenu(!activaMenu)}
              />
              <label htmlFor="toggle"></label>
            </div>
            <ItemsMenu />
          </div>
        </motion.nav>
      </motion.div>
      <MenuMobile
        activaMenu={activaMenu}
        setActivaMenu={() => {
          setActivaMenu();
        }}
      />
    </>
  );
}
