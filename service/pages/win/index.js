import React, { useEffect } from 'react';

import Layout from '../../components/organisms/layout';

export default function Win() {
  useEffect(() => {
    window.location.href = '/jungfrau';
  }, []);

  return (
    <Layout />
  );
}
