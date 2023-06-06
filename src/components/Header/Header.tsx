import { FC } from 'react';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

import { MobileNav, Nav } from 'components';

import { StyledHeader, StyledLogo, StyledLogoIcon } from './styles';
import { IHeaderProps } from './types';

const Header: FC<IHeaderProps> = ({
  isMobileView,
  isMobileNavOpen,
  handleMobileNavOpen,
}) => (
  <StyledHeader $isMobileNavOpen={isMobileNavOpen}>
    <StyledLogo $isMobileView={isMobileView}>
      <StyledLogoIcon />
      {isMobileView &&
        (isMobileNavOpen ? (
          <CloseIcon onClick={handleMobileNavOpen} />
        ) : (
          <MenuIcon onClick={handleMobileNavOpen} />
        ))}
    </StyledLogo>
    {isMobileView ? isMobileNavOpen && <MobileNav /> : <Nav />}
  </StyledHeader>
);

export default Header;
