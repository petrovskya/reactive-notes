import { styled } from 'styled-components';
import { Box } from '@mui/material';

import { Color } from 'ui';

export const StyledNav = styled(Box)({
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '800px',
  width: '100%',
  gap: '10px',
  fontFamily: 'inherit',
  a: {
    color: Color.SECONDARY_DARK,
  },
});
