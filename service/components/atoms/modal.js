import React, { forwardRef, useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Button } from '..';

const Modal = forwardRef(({ showModal, setShowModal, url }, ref) => {
  const { t } = useTranslation();

  return (
    <div className={showModal === undefined ? 'custom-modal' : showModal ? 'show-modal' : 'no-show-modal'}>
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
              <div onClick={() => setShowModal(false)} className="btn-alt-modal ">
                <span>{t('home:modal.btnCancel')}</span>
              </div>
              <Button
                className="btn-modal"
                target="_blank"
                content={t('home:modal.btnIAgree')}
                onClick={() => setShowModal(false)}
                to={url}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Modal;
