import React from 'react';
import Trans from 'next-translate/Trans';

export const AlertMsg = ({ floating = false, showActiveMsg }) => {
  return (
    <div className={`area-Msg ${floating ? 'floating' : ''}`}>
      <div
        className="icon-close link-special"
        onClick={() => showActiveMsg()}
      >
        <img src="/assets/icons/close.svg" alt="hopr logo" />
      </div>
      <div>
        <Trans
          i18nKey="home:modal.public"
          components={{
            paragraph: <p />,
            newsletter: <a href="https://hopr.substack.com/" target="_blank" rel="noopener noreferrer" className="link-out" />,
            telegram: <a href="https://t.me/hoprnet" target="_blank" rel="noopener noreferrer" className="link-out" />,
            twitter: <a href="https://twitter.com/hoprnet" target="_blank" rel="noopener noreferrer" className="link-out" />,
          }}
        />
      </div>
    </div>
  );
};
