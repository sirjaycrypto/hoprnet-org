import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
//Hooks
import { useNodeColumns } from '../../hooks/Columns.hook';

const HoprAddressTable = props => {
  const [, getCol] = useNodeColumns();
  const tableProps = {
    columns: [getCol('hopr_address'), getCol('hopr_staked_amount')],
    ...props,
  };
  return <Table {...tableProps} />;
};

HoprAddressTable.propTypes = {
  props: PropTypes.object,
};

export default HoprAddressTable;
