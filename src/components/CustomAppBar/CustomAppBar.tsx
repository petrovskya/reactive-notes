import { Toolbar } from '@mui/material';

import { Nav } from 'components';

import { StyledAppBar, StyledLogo } from './styles';

const CustomAppBar = () => (
  <StyledAppBar>
    <StyledLogo />
    <Toolbar disableGutters>
      <Nav />
    </Toolbar>
  </StyledAppBar>
);

export default CustomAppBar;
