import React, { useState, useEffect } from "react";
import insertScript from "../../util/insertScript";

export default function Jobs() {
  useEffect(() => {
    insertScript("https://hoprnet.jobbase.io/widget/iframe.js");
  }, []);

  return (
    <>
      <div className="padding-section-aux" id="psJobWidget" />
    </>
  );
}
