import React, { forwardRef, useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import SubStrack from "../molecules/sub-strack";

const Modal = forwardRef(({ showModal, showModalActive }, ref) => {
  const [close, setClose] = useState(showModal);
  const { t } = useTranslation();
console.log(showModal)
  useEffect(() => {}, []);


  return (
    <>
      <div className="container">
        <div className={"modal " + (close ? "" : "close")}>
          <div
            className="icon-close link-special"
            onClick={() => showModalActive()}
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
