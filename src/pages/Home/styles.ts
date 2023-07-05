import styled from 'styled-components';
import { Container } from '@mui/material';

export const StyledHome = styled(Container)({
  '&.MuiContainer-root': {
    display: 'grid',
    placeItems: 'center',
    gap: '40px',
    width: '100%',
  },
});
