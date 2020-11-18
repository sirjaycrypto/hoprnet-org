import React from "react";

export default function Hero({ title, paragraphs }) {
  return (
    <>
      <section className="section-hero-internal">
       <div className="aux-container">
       <div>
          <h1>{title}</h1>
        </div>
        <div>
          <p>{paragraphs}</p>
        </div>
       </div>
      </section>
    </>
  );
}
