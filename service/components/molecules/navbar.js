import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeInDown } from '../../util/motionConfig';
import MenuMobile from './menu-mobile';
import Link from 'next/link';
import ItemsMenu from '../atoms/items-menu';

import { useRouter } from 'next/router';

export default function Navbar({ visibleNow }) {
  const [youDown, setYouDown] = useState(false);
  const [activaMenu, setActivaMenu] = useState(false);
  const router = useRouter();

  const isTheToken = () => {
    return router.pathname === '/token';
  };

  const isHome = () => router.pathname === '/';

  const onScrollNavBar = function () {
    if (window.pageYOffset === 0) {
      setYouDown(false);
    } else {
      if (!isTheToken()) {
        setYouDown(true);
      }

      setActivaMenu(false);
    }
  };

  useEffect(() => {
    isTheToken();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScrollNavBar);
    return () => window.removeEventListener('scroll', onScrollNavBar);
  }, [youDown, isTheToken]);

  return (
    <>
      <motion.div className="wrapper-menu" initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <motion.nav
          variants={fadeInDown}
          id="menu"
          className={youDown ? 'add-scroll-menu' : isHome() ? '' : 'nav-style-no-home'}
          transition={{ delay: 0.8 }}
        >
          <div className={'container-sm-menu ' + (activaMenu ? 'add-shadow' : '')}>
            <div className="help-flex">
              <Link href="/">
                <img
                  className="logo-nav"
                  src="/assets/brand/logo.svg"
                  alt="hopr logo"
                />
              </Link>
            </div>
            <div onClick={() => setActivaMenu(!activaMenu)} className={'icon-menu ' + (activaMenu ? 'open' : '')}>
              <span></span>
            </div>
            <ItemsMenu />
          </div>
        </motion.nav>
      </motion.div>
      <MenuMobile
        activaMenu={activaMenu}
        setActivaMenu={setActivaMenu}
      />
    </>
  );
}
