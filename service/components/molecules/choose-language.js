import React, { useState, useEffect } from "react";

const listLang = [
  {
    info: "de",
    label: "German",
  },
  {
    info: "en",
    label: "English",
  },
  {
    info: "ma",
    label: "Mandarin",
  },
  {
    info: "de",
    label: "Portuguese",
  },
  {
    info: "rus",
    label: "Russian",
  },
  {
    info: "ko",
    label: "Korean",
  },
  {
    info: "es",
    label: "Spanish",
  },
  {
    info: "ja",
    label: "Japanese",
  },
];
export default function ChooseLanguage() {
  const [select, setSelect] = useState("ENGLISH");

  return (
    <div className="container-languages">
      <div>
        <div>{select}</div>
        <ul>
          {listLang.map((e, index) => {
            const { info, label } = e;
            return (
              <a key={index}>
                <li>{label}</li>
              </a>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
