import React from "react";
import Header from "../molecules/header";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";


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
