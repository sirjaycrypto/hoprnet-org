import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";

const HomeBacked = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  return (
    <>
      <section
        ref={ref}
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
});

export default HomeBacked;
