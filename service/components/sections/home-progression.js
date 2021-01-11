import React, { useState, createRef, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Line } from 'react-chartjs-2';
const PARTS = 100;
const PERCENT_BRANCH = 0.68;
const HomeMatter = () => {
  const { t } = useTranslation();
  const [chartSizes, setChartSizes] = useState({ width: 0, height: 0 });
  const chartRef = createRef();
  const data = {
    labels: [
      '0h',
      '12h',
      '24h',
      '36h',
      '48h',
      '60h',
      '72h',
    ],
  };

  const optionsLine = {
    maintainAspectRatio: !1,
    legend: {
      display: false,
      spanGaps: false,
    },
    responsive: true,
    borderCapStyle: 'round',
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
            max: 0.25,
            min: 0.0,
            stepSize: 0.05,
            callback: function (value, index, values) {
              return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
            maxTicksLimit: 3,
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
            0.2,
            0.125,
            0.0900,
            0.0750,
            0.0700,
            0.0650,
            0.0600,
            0.0500,
            0.0450,
            0.0400,
            0.0300,
          ],
          borderDash: [],
          fill: false,
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#648CFA',
        },
      ];
    aResult[0].borderDash.push(width * PERCENT_BRANCH);
    aResult[0].borderDash.push(4);
    for (let i = 0; i <= PARTS; i++) {
      aResult[0].borderDash.push(preWidth);
    }
    return aResult;
  };

  return (      
    <div style={{ padding: "30px 0", marginLeft: "5px" }}>
      <Line
        data={{ ...data, datasets: _handleParseData() }}
        options={optionsLine}
        ref={chartRef}
      />
      <div className="center-help">
        <p>Hypothetical price progression (if no purchases are made)</p>
      </div>
    </div>
  );
};

export default HomeMatter;
