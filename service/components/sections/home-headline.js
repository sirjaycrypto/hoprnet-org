import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";

const HomeHeadline = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const clickBtn = () => {
    console.log("Click");
  };

  return (
    <>
      <section
        ref={ref}
        id="blindText"
        className="section-blindText invert-color "
      >
        <div>
        <h2>{t("home:headline.title")}</h2>
        </div>
        <div className="container">
          <div>
         
            <p className="special">{t("home:headline.beforeInfo")}</p>
            <p>{t("home:headline.mainInfo")}</p>
            <div className="">
              <p className="link-out-label">
                <a>
                {t("home:why.labelDate")}
                </a>
              </p>
            </div>
          </div>

          <div>
            <div className="card-view">
              <h3>{t("home:headline.titleTicket")}</h3>
              <div className="containerImg">
                <img
                  src="/assets/images/logo_h.svg"
                  alt={t("home:headline.titleTicket")}
                />
                <p>$XXXXXX</p>
                <p className="label-remember">
                  {t("home:headline.txtDownNum")}
                </p>
              </div>

              <div>
                <ul>
                  <li>{t("home:headline.fPoint")}</li>
                  <li>{t("home:headline.sPoint")}</li>
                  <li>{t("home:headline.tPoint")}</li>
                </ul>
              </div>
              <div className="area-scroll">
                <p> {t("home:headline.tokenLeft")}</p>
                <div className="scrollIndicator">
                </div>
              </div>
              <div className="btn-ticket">
                <div onClick={() => clickBtn()} className="btn-banner ">
                  <span>{t("common:getHorp")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeHeadline;
