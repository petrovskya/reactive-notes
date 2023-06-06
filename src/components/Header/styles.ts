import { styled } from 'styled-components';
import { AppBar, Box } from '@mui/material';

import { LogoIcon } from 'assets';
import { Color } from 'ui';

import { TIsMobileNavOpen, TIsMobileView } from './types';

const StyledHeader = styled(AppBar)<TIsMobileNavOpen>(
  ({ $isMobileNavOpen }) => ({
    '&.MuiPaper-root': {
      left: $isMobileNavOpen && 0,
      flexDirection: $isMobileNavOpen || 'row',
      width: $isMobileNavOpen && '50vw',
      height: $isMobileNavOpen && '100vh',
      gap: $isMobileNavOpen && '50px',
    },
    justifyContent: $isMobileNavOpen ? 'center' : 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  }),
);

const StyledLogo = styled(Box)<TIsMobileView>(({ $isMobileView }) => ({
  zIndex: 2,
  display: $isMobileView ? 'flex' : 'block',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  margin: '0 15px',
}));

const StyledLogoIcon = styled(LogoIcon)({
  fill: Color.SECONDARY_DARK,
});

export { StyledHeader, StyledLogo, StyledLogoIcon };
