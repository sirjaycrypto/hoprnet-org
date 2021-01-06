import React, { forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";

const HomeRoadMap = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const data = [
    {
      date: "Nov. 2019",
      title: "Idea",
      about:
        "HOPR’s founders develop a decentralized approach to the urgent issue of metadata privacy. HOPR is born!",
      link: "#",
      linkText: "(Book of HOPR, Technical White Paper)",
    },
    {
      date: "April 2020",
      title: "Funding and Launch ",
      about:
        "HOPR officially launches, concluding a $1m seed funding round led by Binance. The HOPR Association is founded. ",
      link: "#",
      linkText: "(Binance)",
    },
    {
      date: "July 2020",
      title: "Idea",
      about:
        "HOPR Hardware NodeThe HOPR Node PC launches, allowing users to run a dedicated HOPR device from their home. ",
      link: "#",
      linkText: "(Shop, gitHub)",
    },
    {
      date: "Aug.-Dec. 2020",
      title: "Testing and Community",
      about:
        " A series of popular incentivized and gamified testnets grow the community and network to 1000 nodes.",
      link: "#",
      linkText: "(Matic, xDai, BSC)",
    },
    {
      date: "Jan. 2021",
      title: "Mainnet Launch (Eiger)",
      about:
        "The HOPR mainnet launches, giving everyone their first chance to buy and earn HOPR tokens. ",
      link: "#",
      linkText: "(SalePage)",
    },
    {
      date: "Feb. 2021",
      title: "Main MainNet (Jungfrau)",
      about:
        "HOPR’s Jungfrau release introduces cover traffic, making the protocol feature complete.",
      link: "#",
      linkText: "(Blogpost)",
    },
    {
      date: "Mar. 2021",
      title: "Launch DAO",
      about:
        "HOPR’s focus on decentralized community enabling governance is solidified with the launch of a DAO.",
      link: "#",
      linkText: " (DecenGov)",
    },
    {
      date: "May. 2021",
      title: "Launch of Ecosystem ",
      about:
        "A robust API allows others to build metadata-private dApps and services on top of the HOPR protocol.",
      link: "#",
      linkText: " (Blogpost)",
    },
    {
      date: "Sept. 2021",
      title: "Token-based Voting",
      about:
        "All token holders will be eligible to vote in the first General Assembly of the HOPR Association. ",
      link: "#",
      linkText: "(Blogpost)",
    },
  ];

  return (
    <>
      <section ref={ref} id="roadMap" className="section-roadMap">
        <div>
          <h2>{t("home:roadMap.title")}</h2>
        </div>
        <div className="container">
          {data.map((e, index) => {
            const { date, title, about, link, linkText } = e;
            return (
              <div key={index} className="road-map-element">
                <div>
                  <p className="styleDate">{date}</p>
                </div>
                <div className="line-help">
                  <span></span>
                </div>
                <div className="area-info">
                  <h4>{title}</h4>
                  <p>{about}</p>
                  <a href="#">{linkText}</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
});

export default HomeRoadMap;
