import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { listLang } from "../../util/listLanguage";

export default function ItemsMenu() {
  const router = useRouter();
  const { t, lang } = useTranslation();
  const linkLocal = [
    {
      path: "/about-us",
      name: "menu:aboutUs",
    },
    {
      path: "/technology",
      name: "menu:technology",
    },
    {
      path: "http://saentis.hoprnet.org/",
      name: "menu:token",
    },
    {
      path: "http://saentis.hoprnet.org/",
      name: "menu:joinTestnet",
    },
    {
      path: "/blog",
      name: "menu:blog",
    },
  ];
  return (
    <>
      <div className="menu-desktop">
        {linkLocal.map((e, index) => {
          const { path, name } = e;
          return (
            <Link key={index} href={path}>
              <a className={router.pathname === path ? "active" : ""}>
                {t(name)}
              </a>
            </Link>
          );
        })}
        <ul className="list-lang-sm">
          {listLang.map((e, i) => {
            const { info } = e;
            return (
             
                 <Link href="/" locale={info} key={i}>
                 <li onClick={() => clickMenu()} className={lang===info ? 'is-current' : ''}>
                   <a>{info}</a>
                 </li>
               </Link>
              
            );
          })}
        </ul>
      </div>
    </>
  );
}


