import React, { useEffect } from 'react';

import Layout from '../../components/organisms/layout';

export default function Setup() {
  useEffect(() => {
    window.location.href = 'https://docs.hoprnet.org/en/latest/src/install-hoprd/using-avado.html';
  }, []);

  return (
    <Layout />
  );
}
