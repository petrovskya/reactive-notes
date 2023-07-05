import { PDFDocumentProxy } from 'pdfjs-dist';

export interface IAboutProps {
  pageScale: number;
  currentPageNumber: number;
  isFirstPageVisible: boolean;
  isLastPageVisible: boolean;
  handleDocumentLoadSuccess: ({ numPages }: PDFDocumentProxy) => void;
  handleSetPreviousPage: () => void;
  handleSetNextPage: () => void;
  handleZoomPageIn: () => void;
  handleZoomPageOut: () => void;
  numberOfPages?: number;
}
