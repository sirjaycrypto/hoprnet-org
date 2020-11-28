import React, { useState, useEffect } from "react";
import Header from "../molecules/header";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";
//
import ChooseLanguage from "../molecules/choose-language.js";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="cursor">
        <Navbar />
    
        {children}

        <Footer />
      </div>
    </>
  );
}
