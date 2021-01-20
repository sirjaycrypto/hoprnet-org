import React, { forwardRef, useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

export default function AlertMsg() {
  const { t } = useTranslation();

  return (
    <div className="area-Msg">
      <div>
        <p>
          To be the first to know when the HOPR token launches and get other
          news about the project, subscribe to our{' '}
          <a target="_blank" rel="noopener noreferrer" className="link-out">
            newsletter,
          </a>{' '}
          or follow us on{' '}
          <a target="_blank" rel="noopener noreferrer" className="link-out">
            Twitter
          </a>{' '}
          or{' '}
          <a target="_blank" rel="noopener noreferrer" className="link-out">
            Telegram.
          </a>
        </p>
      </div>
    </div>
  );
}
