import React, { useState } from 'react';
import { Row, Col } from 'antd';
import HoprAddressTable from '../../components/tables/HoprAddress';
import InputFilter from '../../components/entry/InputFilter';
//Assets
import BrandLogo from '../../assets/brand/logo.svg';
//Hooks
import { useI18n } from '../../hooks/i18n.hook';

const HomeScreen = () => {
  const [, t] = useI18n();
  const [total] = useState(37648);
  return (
    <div className="home-screen">
      <div className="wrapper">
        <Row justify="space-between">
          <Col xl={12}>
            <img src={BrandLogo} alt="HOPR" />
          </Col>
          <Col xl={7} className="align-center">
            <div className="token-total">
              <div className="title-head">
                <h3>{t('HOPR_TOTAL_COUNT')}</h3>
                <h1>{total}</h1>
              </div>
            </div>
          </Col>
        </Row>
        <InputFilter />
        <div className="hopr-table">
          <HoprAddressTable />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
