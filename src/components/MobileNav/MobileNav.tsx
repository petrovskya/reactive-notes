import { FC } from 'react';
import { Button } from '@mui/material';

import { Link } from 'components';
import { BUTTON_TEXT, NAV_LINKS } from 'config/types';
import { ROUTE } from 'router';

import { StyledNav } from './styles';
import { IMobileNavProps } from './types';

const MobileNav: FC<IMobileNavProps> = ({ user, isAuth, handleSignOut }) => (
  <StyledNav>
    <Link to={ROUTE.HOME}>{NAV_LINKS.HOME}</Link>
    <Link to={ROUTE.MY_NOTES}>{NAV_LINKS.MY_NOTES}</Link>
    <Link to={ROUTE.SHARED_NOTES}>{NAV_LINKS.SHARED_NOTES}</Link>
    <Link to={ROUTE.ABOUT}>{NAV_LINKS.ABOUT}</Link>
    {user && isAuth && (
      <Button color='secondary' variant='contained' onClick={handleSignOut}>
        {BUTTON_TEXT.SIGN_OUT}
      </Button>
    )}
  </StyledNav>
);

export default MobileNav;
