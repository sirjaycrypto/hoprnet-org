import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";

const HomeRoadMap = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const clickBtn = () => {
    console.log("Click");
  };

  return (
    <>
      <section
        ref={ref}
        id="roadMap"
        className="section-roadMap"
      >
        <div>
        <h2>{t("home:roadMap.title")}</h2>
        </div>

      </section>
    </>
  );
});

export default HomeRoadMap;
