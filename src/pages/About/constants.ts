import { pdfjs } from 'react-pdf';

export const DEFAULT_PAGE = 1;
export const SCALE_OFFSET = 0.1;
export const PAGE_OFFSET = 1;

export const PDFJS_WORKER_SRC = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const VIEWER_OPTIONS = {
  cMapUrl: 'cmaps/',
  standardFontDataUrl: 'standard_fonts/',
};
