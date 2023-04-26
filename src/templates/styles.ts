import { Container, styled } from '@mui/material';

export const StyledMainTemplate = styled(Container)({
  maxWidth: '1920px',
  padding: '40px 64px',
  margin: '0 auto',
  '@media (max-width: 1920px)': {
    maxWidth: '1920px',
    width: '100%',
  },
  '@media (min-width: 1920px)': {
    maxWidth: '1920px',
    width: '100%',
  },
});
