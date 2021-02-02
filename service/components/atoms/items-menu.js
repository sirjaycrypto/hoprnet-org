import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { listLang } from '../../util/listLanguage';

export default function ItemsMenu() {
  const router = useRouter();
  const [translateY, setTranslateY] = useState(-102);
  const [flag, setFlag] = useState(false);
  const { t, lang } = useTranslation();
  const linkLocal = [
    {
      path: '/about-us',
      name: 'About us',
    },
    {
      path: '/technology',
      name: 'Technology',
    },
    {
      path: '/book-of-hopr',
      name: 'Book of HOPR',
    },
    {
      path: '/token',
      name: 'Token',
    },
    {
      path: 'http://saentis.hoprnet.org/',
      name: 'Testnet',
    },
    {
      path: '/blog',
      name: 'Blog',
    },
  ];

  const isTheToken = () => {
    return router.pathname === '/token';
  };

  const clickMenu = () => {
    if (flag === false) {
      setTranslateY(0);
      setFlag(true);
    } else {
      setTranslateY(-102);
      setFlag(false);
    }
  };

  return (
    <>
      <div className="menu-desktop">
        {linkLocal.map((e, index) => {
          const { path, name } = e;
          return (
            <Link key={index} href={path}>
              <a className={router.pathname === path ? 'active' : ''}>
                {name}
              </a>
            </Link>
          );
        })}
        {isTheToken() && (
          <ul className="list-lang-sm">
            {listLang.map((e, i) => {
              const { info } = e;
              return (
                <Link href="/" locale={info} key={i}>
                  <li
                    onClick={() => clickMenu()}
                    className={lang === info ? 'is-current' : ''}
                  >
                    <a>{info}</a>
                  </li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
