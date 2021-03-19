import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../components/organisms/layout';

export default function Setup() {
  const router = useRouter();
  useEffect(() => {
    if (router) {
      router.push('/node');
    }    
  }, [router]);

  return (
    <Layout />
  );
}
