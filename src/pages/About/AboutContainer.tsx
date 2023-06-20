import { useEffect, useState } from 'react';
import { pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';

import { useSetDefaultPdfScale } from 'hooks';

import About from './About';
import {
  DEFAULT_PAGE,
  PAGE_OFFSET,
  PDFJS_WORKER_SRC,
  SCALE_OFFSET,
} from './constants';

pdfjs.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_SRC;

export const AboutContainer = () => {
  const [numberOfPages, setNumberOfPages] = useState<number>();
  const [currentPageNumber, setCurrentPageNumber] = useState(DEFAULT_PAGE);
  const defaultScale = useSetDefaultPdfScale();
  const [pageScale, setPageScale] = useState(defaultScale);

  const isFirstPageVisible = currentPageNumber <= DEFAULT_PAGE;
  const isLastPageVisible = !!(
    numberOfPages && currentPageNumber >= numberOfPages
  );

  const handleDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy) => {
    setNumberOfPages(numPages);
    setCurrentPageNumber(DEFAULT_PAGE);
  };

  const handleSetPageScale = (offset: number) => {
    setPageScale((pageScale) => pageScale + offset);
  };

  const handleZoomPageOut = () => {
    handleSetPageScale(-SCALE_OFFSET);
  };

  const handleZoomPageIn = () => {
    handleSetPageScale(SCALE_OFFSET);
  };

  const handleSetNewPage = (offset: number) => {
    setCurrentPageNumber((previousPageNumber) => previousPageNumber + offset);
  };

  const handleSetPreviousPage = () => handleSetNewPage(-PAGE_OFFSET);
  const handleSetNextPage = () => handleSetNewPage(PAGE_OFFSET);

  useEffect(() => {
    setPageScale(defaultScale);
  }, [defaultScale]);

  return (
    <About
      currentPageNumber={currentPageNumber}
      numberOfPages={numberOfPages}
      pageScale={pageScale}
      isFirstPageVisible={isFirstPageVisible}
      isLastPageVisible={isLastPageVisible}
      handleDocumentLoadSuccess={handleDocumentLoadSuccess}
      handleSetPreviousPage={handleSetPreviousPage}
      handleSetNextPage={handleSetNextPage}
      handleZoomPageIn={handleZoomPageIn}
      handleZoomPageOut={handleZoomPageOut}
    />
  );
};

export default AboutContainer;
