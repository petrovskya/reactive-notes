import { Nav } from 'components';

import { StyledAppBar, StyledLogo, StyledLogoIcon } from './styles';

const CustomAppBar = () => (
  <StyledAppBar>
    <StyledLogo>
      <StyledLogoIcon />
    </StyledLogo>
    <Nav />
  </StyledAppBar>
);

export default CustomAppBar;
