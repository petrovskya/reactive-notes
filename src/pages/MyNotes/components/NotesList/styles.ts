import styled from 'styled-components';
import { List } from '@mui/material';

export const StyledList = styled(List)({
  display: 'grid',
  width: '100%',
  gap: '20px',
  '&.MuiListItem-root': {
    width: '100%',
  },
});
