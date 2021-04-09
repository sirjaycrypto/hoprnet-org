import React, { useEffect } from 'react';

import Layout from '../../components/organisms/layout';

export default function AvadoToken() {
  useEffect(() => {
    window.location.href = 'https://nft.ava.do/';
  }, []);

  return (
    <Layout />
  );
}
