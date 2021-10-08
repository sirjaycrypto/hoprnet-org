import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ItemsMenu() {
  const router = useRouter();
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
      path: '/token',
      name: 'Token',
    },
    {
      path: 'https://stake.hoprnet.org/',
      name: 'Staking',
      target: '_blank',
    },
    {
      path: '/jungfrau',
      name: 'Jungfrau',
    },
    {
      path: 'https://github.com/hoprnet/hopr-sh/blob/main/README.md',
      name: 'Run Node',
      target: '_blank',
    },
    {
      path: 'https://docs.hoprnet.org/',
      name: 'Docs',
      target: '_blank',
    },
    {
      path: '/blog',
      name: 'Blog',
    },
    {
      path: 'https://forum.hoprnet.org/',
      name: 'Forum',
      target: '_blank',
    },
  ];

  return (
    <>
      <div className="menu-desktop">
        {linkLocal.map((e, index) => {
          const { path, name, target } = e;
          return (
            <Link key={index} href={path}>
              <a className={router.pathname === path ? 'active' : ''} target={target}>{name}</a>
            </Link>
          );
        })}
      </div>
    </>
  );
}
