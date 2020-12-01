import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { listLang } from "../../util/listLanguage";

const linkLocal = [
  {
    path: "/about-us",
    name: "About us",
  },
  {
    path: "/technology",
    name: "Technology",
  },
  {
    path: "http://saentis.hoprnet.org/",
    name: "Token",
  },
  {
    path: "http://saentis.hoprnet.org/",
    name: "Join testnet",
  },
  {
    path: "/blog",
    name: "Blog",
  },
];

export default function ItemsMenu() {
  const router = useRouter();
  const { t, lang } = useTranslation();

  return (
    <>
      <div className="menu-desktop">
        {linkLocal.map((e, index) => {
          const { path, name } = e;
          return (
            <Link key={index} href={path}>
              <a className={router.pathname === path ? "active" : ""}>{name}</a>
            </Link>
          );
        })}
        <ul className="list-lang-sm">
          {listLang.map((e, i) => {
            const { info } = e;
            return (
              lang !== info && (
                <Link href="/" locale={info} key={i}>
                  <li>{info}</li>
                </Link>
              )
            );
          })}
        </ul>
      </div>
    </>
  );
}
