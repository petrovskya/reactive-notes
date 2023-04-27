import { styled, Box, Container } from '@mui/material';

const StyledMyNotes = styled(Container)({
  width: '100%',
  display: 'grid',
  gap: '40px',
  margin: '0 auto',

  '@media screen and (min-width: 1920px)': {
    maxWidth: '1920px',
    width: '100%',
  },

  '@media screen and (max-width: 1920px)': {
    maWidth: '1920px',
    width: '100%',
  },
});

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export { StyledBox, StyledMyNotes };
