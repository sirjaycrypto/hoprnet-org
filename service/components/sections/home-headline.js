import React, { useEffect, useState, forwardRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const HomeHeadline = forwardRef(({ setShowModal, modePreSales }, ref) => {
  const { t } = useTranslation();

  const fetchData = async () => {
    const result = await fetch(
        'https://mainnet.infura.io/v3/3f8a9c1b16ac4826bf23d8519ff7d055',
        {
          method: 'POST',
          body:
            '{"jsonrpc":"2.0","method":"eth_call","params":[{"to":"0x8b6e6e7b5b3801fed2cafd4b22b8a16c2f2db21a","data":"0x15e84af90000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},"latest"],"id":1}',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      ),
      json = await result.json(),
      data = parseInt(json.result, 16) / 1e18;

    if (!isNaN(data)) {
      setPrice(`$${parseFloat(data).toFixed(4)}`);
    }
  };

  const [price, setPrice] = useState('$XXXXXX');
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section
        ref={ref}
        id="blindText"
        className="section-blindText invert-color "
      >
        <h2>{t('home:headline.title')}</h2>
        <div className="container">
          <div className="wrapper-sales-for">
            <div className="card-view the-balancer">
              <h3 style={{ fontWeight: 'bold' }}>{t('home:headline.titleTicket')}</h3>
              <div className="containerImg">
                <img
                  src="/assets/images/HPR_Favicon.svg"
                  alt={t('home:headline.titleTicket')}
                />
                <p>{!modePreSales ? price : '$ 0.30'}</p>
                <p className="label-remember">
                  {t('home:headline.txtDownNum')}
                </p>
              </div>
              <div className="btn-ticket" onClick={() => setShowModal(true)}>
                { !modePreSales && <span>{t('home:banner.button')}</span> }
              </div>
            </div>

            <div className="card-view the-char-balancer">
              <div className="containerImg">
                <img
                  src="/assets/images/hopr_Balancer.png"
                  alt={t('home:headline.titleTicket')}
                />
                <div>
                  <p>
                    {t('home:headline.caption')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container help-area-padding">
          <div className="helper-test">
            <div className="wrapper-test">
              <p
                dangerouslySetInnerHTML={{
                  __html: t('home:headline.beforeInfoTop'),
                }}
                className="special"
              ></p>
              <p className="special">{t('home:headline.beforeInfoBottom')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default HomeHeadline;
