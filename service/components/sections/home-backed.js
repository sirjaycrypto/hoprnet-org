import React from "react";
import useTranslation from "next-translate/useTranslation";
export default function HomeBacked() {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="BACKED-BY"
        className="section-backed padding-section-aux invert-color "
      >
        <div className="container">
          <h2>{t("homeBack:title")}</h2>
          <div className="item-back-container">
            <div className="item-logo-element">
              <p>logo</p>
            </div>
            <div className="item-logo-element">
              <p>logo</p>
            </div>
            <div className="item-logo-element">
              <p>logo</p>
            </div>
            <div className="item-logo-element">
              <p>logo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
