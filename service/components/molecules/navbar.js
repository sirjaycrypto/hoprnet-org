import React, { useState, useEffect } from "react";
import Link from 'next/link';

export default function Navbar({ children, toggle }) {
  return (
      <nav>
          <Link href="/">
              <img
                  className="logo-nav"
                  src='/assets/brand/logo.svg'
                  alt="hopr logo"
                />
          </Link>
          <Link href="/about-us">
              About us
          </Link>
          <Link href="/technology">
              Technology
          </Link>
          <Link href="/token">
              Token
          </Link>
          <Link href="/join-testnet">
              Join testnet
          </Link>
          <Link href="/blog">
              Blog
          </Link>
      </nav>
  );
}
