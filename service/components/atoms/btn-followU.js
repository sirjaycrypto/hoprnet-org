import React, { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";

export default function BtnFollowU() {
  const { t } = useTranslation();
  const clickBtn = () => {
    console.log("Click");
  };
  return (
    <div className="container-bottom">
      <div className="type-btn btn-big" onClick={() => clickBtn()}>
        <span>{t("common:btn-token")}</span>
      </div>
    </div>
  );
}
