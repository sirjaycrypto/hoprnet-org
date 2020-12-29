import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function LocationMarker() {
  const { t } = useTranslation();

  return (
    <div className="info-hero-bottom">
      <p className="help-label-info">{t('home:hero.location')}</p>
    </div>
  );
}
