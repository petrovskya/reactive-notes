import { styled } from 'styled-components';
import { Box, Container } from '@mui/material';

const StyledSharedNotes = styled(Container)({
  '&.MuiContainer-root': {
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    width: '100%',
    '@media screen and (max-width: 600px)': {
      padding: 10,
    },
  },

  '@media screen and (min-width: 1920px)': {
    maxWidth: '1920px',
    width: '100%',
  },

  '@media screen and (max-width: 1920px)': {
    maxWidth: '1920px',
    width: '100%',
  },
});

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export { StyledBox, StyledSharedNotes };
