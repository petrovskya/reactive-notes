import { styled } from 'styled-components';
import { Box, Container } from '@mui/material';

import { Color } from 'ui';

const StyledMyNotes = styled(Container)({
  '&.MuiContainer-root': {
    display: 'flex',
    justifyContent: 'space-between',
    placeItems: 'center',
    gap: '20px',
    width: '100%',
    '@media screen and (max-width: 600px)': {
      padding: 0,
      gap: '10px',
    },
    '@media screen and (min-width: 1200px)': {
      maxWidth: '1920px',
      width: '100%',
    },
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
});

const StyledBox = styled(Box)({
  '&.MuiBox-root': {
    display: 'grid',
    justifyItems: 'center',
    width: '50%',
    gap: 20,
    '@media screen and (max-width: 768px)': {
      width: '100%',
    },
  },
});

const ListWrapper = styled(Box)({
  width: '50%',
  height: '80vh',
  overflowY: 'scroll',
  scrollbarWidth: 'thin',
  scrollbarColor: `${Color.SECONDARY} ${Color.PRIMARY}`,
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: '16px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: Color.SECONDARY,
    borderRadius: '16px',
  },
  '@media screen and (max-width: 768px)': {
    width: '100%',
    height: 'unset',
    overflowY: 'unset',
  },
});

export { StyledBox, StyledMyNotes, ListWrapper };
