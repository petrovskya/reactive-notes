import { FC } from 'react';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from 'components';
import { NAV_LINKS } from 'config/types';
import { ROUTE } from 'router';

import { StyledNav } from './styles';
import { INavProps } from './types';

const Nav: FC<INavProps> = ({ user, isAuth, handleSignOut }) => (
  <StyledNav>
    <Link to={ROUTE.HOME}>{NAV_LINKS.HOME}</Link>
    <Link to={ROUTE.MY_NOTES}>{NAV_LINKS.MY_NOTES}</Link>
    <Link to={ROUTE.SHARED_NOTES}>{NAV_LINKS.SHARED_NOTES}</Link>
    <Link to={ROUTE.ABOUT}>{NAV_LINKS.ABOUT}</Link>
    {user && isAuth && (
      <Button color='secondary' variant='contained' onClick={handleSignOut}>
        <LogoutIcon />
      </Button>
    )}
  </StyledNav>
);

export default Nav;
