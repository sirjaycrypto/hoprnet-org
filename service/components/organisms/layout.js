import React, { useState, useEffect } from "react";
import Navbar from "../molecules/navbar";
import AreaLanguages from "../molecules/area-languages";
import Footer from "../molecules/footer";

export default function Layout({ children, toggle }) {
  return (
    <>
      <Navbar />
      <AreaLanguages />
      {children}
      <Footer />
    </>
  );
}
