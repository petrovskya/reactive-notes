import styled from 'styled-components';
import { List } from '@mui/material';

export const StyledList = styled(List)({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(auto-fill, 345px)',
  placeContent: 'center',
  gap: '40px',
  '&.MuiList-root': {
    '@media screen and (max-width: 600px)': {
      gridTemplateColumns: '260px',
    },
  },
});
