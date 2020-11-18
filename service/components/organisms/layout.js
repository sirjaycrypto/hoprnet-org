import React, { useState, useEffect } from "react";
import Cursor from "../atoms/cursor";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";

export default function Layout({ children }) {
    
  return (
    <>
      <Cursor />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
