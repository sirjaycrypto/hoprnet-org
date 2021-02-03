import React, { useState } from 'react';
import ItemsMenu from '../atoms/items-menu';
import { listLang } from '../../util/listLanguage';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

export default function MenuMobile({ activaMenu }) {
  const [flag, setFlag] = useState(false);
  const router = useRouter();
  const { t, lang } = useTranslation();

  const isTheToken = () => {
    return router.pathname === '/token';
  };

  const clickMenu = () => {
    if (flag === false) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  return (
    <div className={'menu-mobile ' + (activaMenu ? 'open' : '')}>
      <ItemsMenu
        activaMenu={() => {
          activaMenu();
        }}
      />
      {isTheToken() && (
        <div className="list-container">
          <ul className="list-lang-sm">
            {listLang.map(({ info, label }) => {
              return (
                <Link href="/" locale={info} key={label}>
                  <li
                    onClick={clickMenu}
                    className={lang === info ? 'is-current' : 'is-normal'}
                  >{info}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
