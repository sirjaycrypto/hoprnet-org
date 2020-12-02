import React from "react";
import useTranslation from "next-translate/useTranslation";
export default function HomeHardware() {
  const { t } = useTranslation();
  return (
    <>
      <section
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
}
