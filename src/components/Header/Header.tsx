import { FC } from 'react';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

import { LogoIcon } from 'assets';
import { MobileNav, Nav } from 'components';

import { StyledHeader, StyledLogo } from './styles';
import { IHeaderProps } from './types';

const Header: FC<IHeaderProps> = ({
  isMobileView,
  isMobileNavOpen,
  handleMobileNavVisibility,
}) => (
  <StyledHeader $isMobileNavOpen={isMobileNavOpen}>
    <StyledLogo $isMobileView={isMobileView}>
      <LogoIcon />
      {isMobileView &&
        (isMobileNavOpen ? (
          <CloseIcon onClick={handleMobileNavVisibility} />
        ) : (
          <MenuIcon onClick={handleMobileNavVisibility} />
        ))}
    </StyledLogo>
    {isMobileView ? isMobileNavOpen && <MobileNav /> : <Nav />}
  </StyledHeader>
);

export default Header;
