import { AppBar, styled } from '@mui/material';
import { LogoIcon } from 'assets';

import { Color } from 'ui';

const StyledAppBar = styled(AppBar)({
  position: 'fixed',
  flexDirection: 'row',
  maxWidth: '100%',
  backgroundColor: Color.PRIMARY,
});

const StyledLogo = styled(LogoIcon)({
  display: 'flex',
  height: '60px',
  fill: Color.SECONDARY_DARK,
});

export { StyledAppBar, StyledLogo };
