import React, { useState, useEffect } from "react";
import Cursor from "../atoms/cursor";
import Navbar from "../molecules/navbar";
import AreaLanguages from "../molecules/area-languages";
import Footer from "../molecules/footer";

export default function Layout({ children }) {
    
  return (
    <>
      <Cursor />
      <Navbar />
      <AreaLanguages />
      {children}
      <Footer />
    </>
  );
}
