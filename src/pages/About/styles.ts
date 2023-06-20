import { Box, Button, Container } from '@mui/material';
import { styled } from 'styled-components';
import { Document, Page } from 'react-pdf';

import { Color } from 'ui';

export const StyledContainer = styled(Container)({
  '&.MuiContainer-root': {
    display: 'grid',
    justifyContent: 'center',
    placeItems: 'center',
    gap: '5px',
  },
});

export const DocumentWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
});

export const StyledDocument = styled(Document)({
  display: 'grid',
  maxWidth: '60vw',
  width: '100%',
  height: '75vh',
  overflowY: 'scroll',
  scrollbarWidth: 'thin',
  scrollbarHeight: 'thin',
  scrollbarColor: `${Color.SECONDARY} ${Color.PRIMARY}`,
  '&::-webkit-scrollbar': {
    width: 6,
    height: 6,
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
  },
});

export const StyledPage = styled(Page)({
  height: '73vh',
});

export const NavigateButton = styled(Button)({
  width: 40,
  height: 40,
  '&.MuiButton-root': {
    '@media screen and (max-width: 480px)': {
      minWidth: 24,
      height: 24,
      padding: 6,
    },
  },
});
