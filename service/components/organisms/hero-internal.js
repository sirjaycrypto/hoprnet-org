import React from "react";

export default function Hero({ children }) {
  return (
    <>
      <section className="section-hero-internal">
       <div className="container">
      {children}
       </div>
      </section>
    </>
  );
}
