import React from 'react';
import { Col, Row, Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
//Hooks
import { useI18n } from '../../hooks/i18n.hook';

const InputFilter = () => {
  const [, t] = useI18n();
  return (
    <Row gutter={[10]} className="input-filter">
      <Col xl={22}>
        <Input placeholder={t('HOPR_INPUT_TEXT')} />
      </Col>
      <Col xl={2}>
        <Button
          type="primary"
          size="large"
          icon={<FontAwesomeIcon icon={faSearch} className="anticon" />}
        >
          {t('HOPR_SEARCH')}
        </Button>
      </Col>
    </Row>
  );
};
export default InputFilter;
