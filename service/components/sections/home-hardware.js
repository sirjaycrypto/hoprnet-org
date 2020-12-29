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
          <div className="container-center-center">
            <h2>{t("home:hardware.title")}</h2>
          </div>
          <div className="flex-line-row">
            <div className="aux-padding-box-read">
              <h3>{t("home:hardware.subtitleA")}</h3>
              <p>{t("home:hardware.about")}</p>
            </div>
            <div>
              <h3>{t("home:hardware.subtitleB")}</h3>
              <img
                src="/assets/images/banner-hardware.jpg"
                alt={t("home:hardware.title")}
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
