import { useState } from 'react';
import { fetchPrice } from '../../util/services';

export const usePrice = () => {
  const [price, setPrice] = useState('XXX');

  const getPrice = async () => {
    const nPrice = await fetchPrice();
    if (!isNaN(nPrice)) {
      setPrice(nPrice.toFixed(4));
    }
  };

  return [price, getPrice];
};
