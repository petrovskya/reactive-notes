import { FC } from 'react';
import {
  Button,
  CircularProgress,
  Typography,
  ButtonGroup,
} from '@mui/material';
import {
  NavigateNext as NavigateNextIcon,
  NavigateBefore as NavigateBeforeIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from '@mui/icons-material';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { samplePdf } from 'assets';
import { PAGINATION } from 'config';
import { COMPONENT_TITLE } from 'config/types';

import { VIEWER_OPTIONS } from './constants';
import {
  DocumentWrapper,
  NavigateButton,
  StyledContainer,
  StyledDocument,
  StyledPage,
} from './styles';
import { IAboutProps } from './types';

const About: FC<IAboutProps> = ({
  currentPageNumber,
  numberOfPages,
  pageScale,
  isFirstPageVisible,
  isLastPageVisible,
  handleDocumentLoadSuccess,
  handleSetPreviousPage,
  handleSetNextPage,
  handleZoomPageIn,
  handleZoomPageOut,
}) => (
  <StyledContainer>
    <Typography variant='h2'>{COMPONENT_TITLE.ABOUT}</Typography>
    <ButtonGroup>
      <Button
        type='button'
        variant='contained'
        color='secondary'
        onClick={handleZoomPageOut}
      >
        <ZoomOutIcon />
      </Button>
      <Button type='button' variant='contained' onClick={handleZoomPageIn}>
        <ZoomInIcon />
      </Button>
    </ButtonGroup>
    <DocumentWrapper>
      <NavigateButton
        type='button'
        variant='contained'
        disabled={isFirstPageVisible}
        onClick={handleSetPreviousPage}
      >
        <NavigateBeforeIcon />
      </NavigateButton>
      <StyledDocument
        file={samplePdf}
        options={VIEWER_OPTIONS}
        loading={<CircularProgress color='secondary' />}
        onLoadSuccess={handleDocumentLoadSuccess}
      >
        <StyledPage scale={pageScale} pageNumber={currentPageNumber} />
      </StyledDocument>
      <NavigateButton
        type='button'
        variant='contained'
        disabled={isLastPageVisible}
        onClick={handleSetNextPage}
      >
        <NavigateNextIcon />
      </NavigateButton>
    </DocumentWrapper>
    {numberOfPages && (
      <Typography variant='h4'>
        {PAGINATION(currentPageNumber, numberOfPages)}
      </Typography>
    )}
  </StyledContainer>
);

export default About;
