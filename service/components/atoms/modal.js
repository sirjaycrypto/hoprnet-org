import React, { forwardRef, useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

const Modal = forwardRef(({ showModal, showModalActive }, ref) => {
  const [close, setClose] = useState(showModal);
  const { t } = useTranslation();

  return (
    <div className="bg-modal">
      <div className="modal">
        <div className="hero-moda">
          <span></span>
        </div>
        <div className="main-modal">
          <div className="area-label-modal">
            <h2>Disclaimer</h2>
            <p>
              By clicking on this link, you will be redirected to a website
              provided by a third-party (third-party website). HOPR (likewise
              any affiliated entity) has no control over the content, offerings
              (including offerings regarding HOPR tokens) or resources of the
              third-party website, and accepts no responsibility for the
              third-party website, the content, offerings or resources, or for
              any loss or damage that may arise from your use of the third
              party-website, the content, offerings or resources. If you decide
              to access the third-party website, you do so entirely at your own
              risk and subject to the terms and conditions of use for the
              third-party website.
            </p>
          </div>
          <div className="area-btn-modal"></div>
        </div>
      </div>
    </div>
  );
});

export default Modal;
