import { Toolbar } from '@mui/material';

import { StyledAppBar, StyledLogo } from './styles';

const CustomAppBar = () => (
  <StyledAppBar>
    <StyledLogo />
    <Toolbar disableGutters></Toolbar>
  </StyledAppBar>
);

export default CustomAppBar;
