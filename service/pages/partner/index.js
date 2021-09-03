import React, { useEffect } from 'react';

import Layout from '../../components/organisms/layout';

export default function Partner() {
  useEffect(() => {
    window.location.href = '/partners';
  }, []);

  return (
    <Layout />
  );
}
