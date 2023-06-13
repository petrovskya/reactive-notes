import { styled } from 'styled-components';
import { Container } from '@mui/material';

export const StyledMainTemplate = styled(Container)({
  '&.MuiContainer-root': {
    maxWidth: '1920px',
    height: '70vh',
    padding: '0 32px',
    margin: '80px auto',
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
