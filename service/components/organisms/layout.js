import React, { useState, useEffect } from "react";
import Header from "../molecules/header";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";
import { motion, transform } from "framer-motion";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="cursor">
        <Navbar />
        <motion.div
         
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          {children}
        </motion.div>
        <Footer />
      </div>
    </>
  );
}
