import styled from '@emotion/styled';
import { Container } from '@mui/material';

const StyledHome = styled(Container)({
  width: '100%',
  display: 'grid',
  placeItems: 'center',
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

export { StyledHome };
