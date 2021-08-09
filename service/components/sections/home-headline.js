import React, { useEffect, forwardRef } from 'react';
import { useTranslation } from '../../hooks/translation';
import { usePrice } from '../hooks/usePrice';
import { Button } from '..';

const HomeHeadline = forwardRef(
  ({ launchMode, modePreSales, toggleModal }, ref) => {
    const [price, getPrice] = usePrice();
    const { t } = useTranslation();

    useEffect(() => {
      getPrice();
    }, []);

    return (
      <>
        <section
          ref={ref}
          id="blindText"
          className="section-blindText invert-color"
        >
          <h2>{t('home:headline.title')}</h2>
          <div className="container">
            <div className="wrapper-sales-for">
              <div className="card-view the-balancer">
                <h3 style={{ fontWeight: 'bold' }}>
                  {t('common:nowOnUnisap')}
                </h3>
                <div className="containerImg">
                  <img
                    src="/assets/images/HPR_Favicon.svg"
                    alt={t('home:headline.titleTicket')}
                  />
                  <p>
                    ${launchMode ? price : modePreSales ? ' 0.30' : ' 0.30'}
                  </p>
                  <p className="label-remember">
                    {t('home:headline.txtDownNum')}
                  </p>
                </div>
                <div className="btn-row">
                  <div
                    className="btn-ticket"
                    onClick={() =>
                      toggleModal(
                        'https://app.uniswap.org/#/swap?outputCurrency=0xf5581dfefd8fb0e4aec526be659cfab1f8c781da'
                      )
                    }
                  >
                    <img
                      src="/assets/images/uniswap.svg"
                      alt={t('home:headline.titleTicket')}
                    />
                    <span>{t('home:banner.button')}</span>
                  </div>
                  <div
                    className="btn-ticket"
                    onClick={() =>
                      toggleModal(
                        'https://ascendex.com/en/basic/cashtrade-spottrading/usdt/hopr'
                      )
                    }
                  >
                    <img
                      src="/assets/images/ascendex.svg"
                      alt={t('home:headline.titleTicket')}
                    />
                    <span>{t('home:banner.button')}</span>
                  </div>
                </div>
              </div>
              <div className="card-view stake">
                <h3 style={{ fontWeight: 'bold' }}>{t('common:staking')}</h3>
                <div className="containerImg">
                  <img
                    className="staking"
                    src="/assets/images/hopr_stake.png"
                    alt={t('home:headline.titleTicket')}
                  />
                  <p className="label-remember">
                    18.25% base APR plus NFT APR boost
                  </p>
                </div>
                <Button
                  className="btn-ticket"
                  target="_blank"
                  content={t('home:banner.stake')}
                  to="https://stake.hoprnet.org"
                />
              </div>
            </div>
          </div>

          <div className="container help-area-padding">
            <div className="helper-test">
              <div className="wrapper-test">
                <p className="special">{t('home:headline.beforeInfoTop')}</p>
                <p className="special">{t('home:headline.beforeInfoBottom')}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
);

export default HomeHeadline;
