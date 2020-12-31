import React from "react";
import useTranslation from "next-translate/useTranslation";

export default function LocationMarker() {
  const { t } = useTranslation();

  return (
<<<<<<< HEAD
    <div className="info-hero-top">
      <p className="help-label-info">Jungfraujoch, Switzerland, 3454 masl</p>
=======
    <div className="info-hero-bottom">
      <p className="help-label-info">{t('home:hero.location')}</p>
>>>>>>> c8a0e2b5b46126dbdced3c8b61d6df802045b244
    </div>
  );
}
