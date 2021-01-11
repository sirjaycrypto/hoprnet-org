import React, { useEffect, useState, forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";

const HomeHeadline = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const clickBtn = () => {
    console.log("Click");
  };

  const fetchData = async () => {
    const result = await fetch('https://api.etherscan.io/api?module=proxy&action=eth_call&to=0x8b6e6e7b5b3801fed2cafd4b22b8a16c2f2db21a&data=0x15e84af90000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&tag=latest'),
      json = await result.json(),
      data = parseInt(json.result, 16) /1e18;

    if (!isNaN(data)) {
      setPrice(`$${parseFloat(data).toFixed(4)}`);
    }
  };

  const [price, setPrice] = useState('$XXXXXX');
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section
        ref={ref}
        id="blindText"
        className="section-blindText invert-color "
      >
        <div className="container">
          <div className="helper-test">
            <div>
              <h2>{t("home:headline.title")}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("home:headline.beforeInfoTop"),
                }}
                className="special"
              ></p>
              <p className="special">{t("home:headline.beforeInfoBottom")}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div>
            <p>{t("home:headline.mainInfo")}</p>
            <div className="">
              <p className="link-out-label">
                <a
                  href="https://www.cisco.com/c/dam/m/en_in/innovation/enterprise/assets/visual_networking_index_infographic_2016.pdf"
                  target="_blank"
                >
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
                <p>{price}</p>
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
                <div className="scrollIndicator"></div>
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
