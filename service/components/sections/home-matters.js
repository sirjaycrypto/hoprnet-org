import React, { forwardRef, useState, createRef, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { Line } from "react-chartjs-2";

const PARTS = 100;
const PERCENT_BRANCH = 0.68;
const HomeMatter = forwardRef(({ setVisibleNow }, ref) => {
  const { t } = useTranslation();
  const [chartSizes, setChartSizes] = useState({ width: 0, height: 0 });
  const chartRef = createRef();
  const data = {
    labels: [
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
  };

  const optionsLine = {
    maintainAspectRatio: !1,
    legend: {
      display: false,
      spanGaps: false,
    },
    responsive: true,
    borderCapStyle: "round",
    onResize: (props) => {
      setChartSizes(props);
    },
    elements: {
      point: {
        radius: 0,
        borderWidth: 0,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            max: 5000000,
            min: 0.0,
            stepSize: 1000000,
            callback: function (value, index, values) {
              return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            maxRotation: 0,
            minRotation: 0,
            maxTicksLimit: 7,
          },
        },
      ],
    },
  };
  const _handleParseData = () => {
    let { width } = chartSizes || chartRef.current?.chartInstance,
      preWidth = 3,
      aResult = [
        {
          data: [
            241812,
            368808,
            522840,
            614016,
            718176,
            869112,
            1152648,
            1464000,
            1810908,
            2237436,
            2740932,
            3337284,
            4200000,
          ],
          borderDash: [],
          fill: false,
          backgroundColor: "rgba(0,0,0,0)",
          borderColor: "#648CFA",
        },
      ];
    aResult[0].borderDash.push(width * PERCENT_BRANCH);
    aResult[0].borderDash.push(4);
    for (let i = 0; i <= PARTS; i++) {
      aResult[0].borderDash.push(preWidth);
    }
    return aResult;
  };

  function _handleResize() {
    if (chartRef.current !== null) {
      setChartSizes(chartRef.current.chartInstance);
    }
  }
  useEffect(() => {
    _handleResize();
    window.addEventListener("resize", _handleResize);

    return () => window.removeEventListener("resize", _handleResize);
  }, [_handleResize]);

  return (
    <section
      ref={ref}
      id="WHY-IT-MATTERS"
      className="section-why-matters invert-color "
    >
      <div className="container">
        <div className="container-center-center">
          <h2>{t("home:why.title")}</h2>
        </div>
        <div className="flex-line-row">
          <div className="aux-padding-box-read">
            <p>"{t("home:why.mainText")}"</p>
          </div>
          <div>
            <div className="container-char">
              <Line
                data={{ ...data, datasets: _handleParseData() }}
                options={optionsLine}
                ref={chartRef}
              />
            </div>
            <div className="center-help">
              <p className="link-out">{t("home:why.labelDate")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HomeMatter;
