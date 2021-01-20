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
            <h2>{t('home:modal.title')}</h2>
            <p>{t('home:modal.about')}</p>
          </div>
          <div className="area-btn-modal">
            <div className="btn-alt-modal ">
              <span>{t('common:btn-Cancel')}</span>
            </div>
            <div className="btn-modal ">
              <span>{t('common:btn-IAgree')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Modal;
