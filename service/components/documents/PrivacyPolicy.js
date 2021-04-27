import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { SizeMe } from 'react-sizeme';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function PrivacyPolicyDoc() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  function onDocumentLoadSuccess(body) {
    setNumPages(body.numPages);
    setLoading(false);
  }
  function previousPage() {
    window.scrollTo(0, 0);
    setPageNumber(pageNumber - 1);
  }
  function nextPage() {
    window.scrollTo(0, 0);
    setPageNumber(pageNumber + 1);
  }
  return (
    <div>
      <SizeMe
        monitorHeight
        render={({ size }) => (
          <div className="pdfContainer">
            <Document
              file="assets/documents/HOPR_privacy.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page width={size.width} pageNumber={pageNumber} />
            </Document>
            <div className="mb-24 pdfPages">
              <p>
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
              </p>
              <div className="aux-for-btn">
                {pageNumber > 1 && (
                  <button type="button" onClick={previousPage}>
                    Previous
                  </button>
                )}
                {pageNumber < numPages && (
                  <button type="button" onClick={nextPage}>
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
}
