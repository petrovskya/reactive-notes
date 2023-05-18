import styled from 'styled-components';
import { Container } from '@mui/material';

export const StyledHome = styled(Container)({
  '&.MuiContainer-root': {
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    width: '100%',
  },

  '@media screen and (min-width: 1920px)': {
    maxWidth: '1920px',
    width: '100%',
  },

  '@media screen and (max-width: 1920px)': {
    maxWidth: '1920px',
    width: '100%',
  },
  '@media screen and (max-width: 600px)': {
    maxWidth: '1920px',
    width: '100%',
  },
});
