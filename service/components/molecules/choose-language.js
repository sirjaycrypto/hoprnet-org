import React, { useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/css';
import useTranslation from 'next-translate/useTranslation';
import { listLang } from '../../util/listLanguage';

export default function ChooseLanguage() {
  const [translateY, setTranslateY] = useState(-102);
  const [flag, setFlag] = useState(false);
  const { lang } = useTranslation();

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
    <div className="container-languages invert-color">
      <div className="select-lang" onMouseEnter={() => clickMenu()}>
        {lang}
      </div>
      <div className="box-hidden-info">
        <ul
          onMouseLeave={() => clickMenu()}
          className={css`
            transform: translateY(${translateY}%);
          `}
        >
          {listLang.map((e, i) => {
            const { info, label } = e;
            return (
              <Link href="/token" locale={info} key={i}>
                <li
                  onClick={() => clickMenu()}
                  className={lang === info ? 'is-current' : ''}
                >
                  <a>{label}</a>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
