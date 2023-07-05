import { Box, Button, Container } from '@mui/material';
import { styled } from 'styled-components';
import { Document, Page } from 'react-pdf';

import { Color } from 'ui';

export const StyledContainer = styled(Container)({
  '&.MuiContainer-root': {
    display: 'grid',
    justifyContent: 'center',
    placeItems: 'center',
    gap: '10px',
    paddingBottom: '20px',
  },
});

export const DocumentWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80vw',
  gap: '10px',
});

export const StyledDocument = styled(Document)({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '75vw',
  width: '100%',
  height: '75vh',
  gap: '20px',
  overflowY: 'scroll',
  scrollbarWidth: 'thin',
  scrollbarHeight: 'thin',
  scrollbarColor: `${Color.SECONDARY} ${Color.PRIMARY}`,
  '&::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: '16px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: Color.SECONDARY,
    borderRadius: '16px',
  },
  '@media screen and (max-width: 480px)': {
    maxWidth: '50vw',
    gap: '10px',
  },
});

export const StyledLoader = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
});

export const StyledPage = styled(Page)({
  margin: 'auto',
});

export const NavigateButton = styled(Button)({
  width: '40px',
  height: '40px',
  '&.MuiButton-root': {
    '@media screen and (max-width: 480px)': {
      minWidth: '24px',
      height: '24px',
      padding: '6px',
    },
  },
});
