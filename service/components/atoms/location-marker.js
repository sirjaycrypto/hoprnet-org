import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function LocationMarker() {
  const { t } = useTranslation();

  return (
    <div className="info-hero-top">
      <p className="help-label-info">Jungfraujoch, Switzerland, 3454 masl</p>
    </div>
  );
}
