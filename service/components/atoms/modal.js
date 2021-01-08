import React, { forwardRef, useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import SubStrack from "../molecules/sub-strack";

const Modal = forwardRef(({ dateFinal, changeItemVisible }, ref) => {
  const [close, setClose] = useState(dateFinal);
  const { t } = useTranslation();

  useEffect(() => {}, []);

  const changeState = () => {
    setClose(true);
  };

  return (
    <>
      <div className="container">
        <div className={"modal " + (close ? "" : "close")}>
          <div
            className="icon-close link-special"
            onClick={() => changeItemVisible()}
          >
            <img src="/assets/icons/close.svg" alt="hopr logo" />
          </div>
          <SubStrack />
        </div>
      </div>
    </>
  );
});

export default Modal;
