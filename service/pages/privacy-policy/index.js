import React from 'react';
import dynamic from 'next/dynamic';
import { SectionContainer } from '../../components';
import Layout from '../../components/organisms/layout';
const PdfViewer = dynamic(
  () => import('../../components/documents/PrivacyPolicy'),
  { ssr: false }
);
export default function Index() {
  return (
    <div className="privacy-page">
      <Layout>
        <PdfViewer />
      </Layout>
    </div>
  );
}
