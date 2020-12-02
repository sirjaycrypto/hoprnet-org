import React, { useState, useEffect } from "react";
import Link from "next/link";
import { css } from "@emotion/css";
import useTranslation from "next-translate/useTranslation";
import {listLang} from '../../util/listLanguage';


export default function ChooseLanguage() {
  const [translateY, setTranslateY] = useState(-102);
  const [flag, setFlag] = useState(false);
  const { t, lang } = useTranslation();

  const clickMenu = ()=>{
  if(flag==false){
    setTranslateY(0)
    setFlag(true)
  }else{
    setTranslateY(-102)
    setFlag(false)
  }
  }

  return (
    <div className="container-languages">
      <div>
        <div className="select-lang" onClick={() => clickMenu()}>
          {lang}
        </div>
        <div className="box-hidden-info">
          <ul
            className={css`
            transform: translateY(${translateY}%);
            `}
          >
            {listLang.map((e, i) => {
              const { info, label } = e;
              return (
                
                  <Link href="/" locale={info} key={i}>
                    <li>{label}</li>
                  </Link>
                
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
