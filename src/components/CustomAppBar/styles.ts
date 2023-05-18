import { styled } from 'styled-components';
import { AppBar, Box } from '@mui/material';

import { LogoIcon } from 'assets';
import { Color } from 'ui';

const StyledAppBar = styled(AppBar)({
  '&.MuiPaper-root': {
    flexDirection: 'row',
  },
  padding: '0 20px',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledLogo = styled(Box)({
  margin: '0 15px',
});

const StyledLogoIcon = styled(LogoIcon)({
  fill: Color.SECONDARY_DARK,
});

export { StyledAppBar, StyledLogo, StyledLogoIcon };
