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
            <h2>{t("homeHard:title")}</h2>
          </div>
          <div className="flex-line-row">
            <div className="aux-padding-box-read">
              <h3>{t("homeHard:subtitleA")}</h3>
              <p>{t("homeHard:about")}</p>
            </div>
            <div>
            <h3>{t("homeHard:subtitleB")}</h3>
              <img
                src="/assets/images/banner-hardware.jpg"
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
