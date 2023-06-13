import { styled } from 'styled-components';
import { Box } from '@mui/material';

import { Color } from 'ui';

export const StyledNav = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '800px',
  width: '100%',
  fontFamily: 'inherit',
  a: {
    color: Color.SECONDARY_DARK,
  },
});
