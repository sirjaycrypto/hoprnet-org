import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";

const HomeHardware = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  return (
    <>
      <section
        ref={ref}
        id="HOPR-NODE-ON-GITHUB"
        className="section-hopr-github padding-section-aux"
      >
        <div className="container">
          <div className="flex-line-row">
            <div className="aux-padding-box-read">
              <h2>{t("homeHard:title")}</h2>
              <p>{t("homeHard:about")}</p>
            </div>
            <div>
              <img
                src="/assets/images/banner-ardware.jpg"
                alt={t("homeHard:title")}
                className="aux-img-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeHardware;
