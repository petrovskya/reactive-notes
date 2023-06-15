import { styled } from 'styled-components';
import { Box, Container } from '@mui/material';

export const StyledSharedNotes = styled(Container)({
  '&.MuiContainer-root': {
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    width: '100%',
    '@media screen and (max-width: 600px)': {
      padding: 10,
    },
  },
});

export const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});
