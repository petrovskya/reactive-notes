import { styled } from 'styled-components';
import { Container } from '@mui/material';

export const StyledMainTemplate = styled(Container)({
  '&.MuiContainer-root': {
    maxWidth: '1920px',
    padding: '40px 64px',
    margin: '80px auto',
    '@media screen and (max-width: 600px)': {
      padding: '60px 10px',
    },
  },

  '@media (max-width: 1920px)': {
    maxWidth: '1920px',
    width: '100%',
  },

  '@media (min-width: 1920px)': {
    maxWidth: '1920px',
    width: '100%',
  },
});
