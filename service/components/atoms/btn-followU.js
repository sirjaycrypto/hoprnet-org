import React, { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import { css } from "@emotion/css";
export default function BtnFollowU() {
  const [fontSize, setFontSize] = useState(34);
  const { t } = useTranslation();

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setFontSize(34);
      } else {
        setFontSize(14);
      }
    };
  }, [fontSize]);

  const clickBtn = () => {
    console.log("Click");
  };
  return (
    <div className="container-bottom link-special">
      <div
        onClick={() => clickBtn()}
        className={css`
          background: linear-gradient(90deg, #0000db 0%, #292941 100%);
          transition: all 600ms ease-in-out;
          padding: 0em 1.5em;
          border-radius: 100px;
          width: fit-content;
        `}
      >
        <span
          className={css`
            font-size: ${fontSize}px;
            transition: all 300ms ease-in-out;
            font-weight: 600;
            line-height: 2em;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: 0.2975px;
            color: #ffffff;
            margin: 0;
            padding: 0;
            &:hover {
              color: #ffffa0;
            }
          `}
        >
          {t("common:btn-token")}
        </span>
      </div>
    </div>
  );
}
