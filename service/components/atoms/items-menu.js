import React from "react";
import Link from "next/link";
export default function ItemsMenu() {
  return (
    <>
      <div className="menu-desktop">
        <Link href="/about-us">About us</Link>
        <Link href="/technology">Technology</Link>
        <Link href="http://saentis.hoprnet.org/">Token</Link>
        <Link href="http://saentis.hoprnet.org/">Join testnet</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </>
  );
}
